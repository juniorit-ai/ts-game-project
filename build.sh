#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

CURRENT_DIR="$(pwd)"

if [ "$SCRIPT_DIR" != "$CURRENT_DIR" ]; then
    echo "Error: This script must be run from its own directory."
    exit 1
fi

get_github_pages_url() {
    # Get the remote URL of the 'origin' remote
    remote_url=$(git remote -v | grep '^origin' | grep '(fetch)' | awk '{print $2}')

    # Check if the remote URL is in SSH or HTTPS format
    if [[ $remote_url == git@github.com:* ]]; then
        # SSH format
        repo_name=$(echo $remote_url | sed 's/git@github.com://;s/\.git$//')
    elif [[ $remote_url == https://github.com/* ]]; then
        # HTTPS format
        repo_name=$(echo $remote_url | sed 's/https:\/\/github.com\///;s/\.git$//')
    else
        echo "Error: Not a GitHub repository or unsupported URL format."
        return 1
    fi

    # Construct GitHub Pages URL
    user_name=$(echo $repo_name | cut -d'/' -f1)
    repo_name=$(echo $repo_name | cut -d'/' -f2)
    echo "https://$user_name.github.io/$repo_name"
}

(
export EMSCRIPTEN=/home/juniorit/emsdk/upstream/emscripten

case $1 in
    "clean")
        npm run clean
        exit 0
        ;;
    "web")
        php -S localhost:9000 -t dist
        exit 0
        ;;
    "deploy")
        if [ -n "$JUNIORIT_CONTAINER_TOKEN" ] && [ -n "$JUNIORIT_CONTAINER_HOST_PORT" ]; then
            FROM_PATH=$(pwd | sed 's|/home/juniorit/workspace/||')
            curl "http://172.17.0.1:$JUNIORIT_CONTAINER_HOST_PORT/publish?containerToken=$JUNIORIT_CONTAINER_TOKEN&fromPath=$FROM_PATH/dist&toPath=typescript"
            echo
            echo "Your game has been deployed to $JUNIORIT_CONTAINER_USER_WEBSITE/typescript/. You can share with your friends now."
        else
            cp -f dist/* "$GAMECRAFT_PROJECT_PATH/typescript/"
            cd $GAMECRAFT_PROJECT_PATH
            git add .
            git commit -a -m "deploy at $(date)"
            git push
            echo
            echo "Your game has been deployed to `get_github_pages_url`. You can share with your friends now."
            echo
            cd -
        fi
        exit 0
        ;;
    "submit")
        juniorit submit
        exit 0
        ;;
    *)
        # for the rest
        ;;
esac

mkdir -p ../.vscode/
cp -f .vscode/* ../.vscode/

npm run build
)
