#!/usr/bin/env bash
set -euo pipefail

readonly DEST_DIR="/var/www/DojoMate/downloads"
readonly DEST_FILE="DojoMate-latest.apk"

usage() {
    cat <<'EOF'
Usage: ./deploy-apk.sh </path/to/new.apk> <build-tag>

Copies the provided APK into /var/www/DojoMate/downloads/DojoMate-latest.apk
and stores an immutable copy at DojoMate-<build-tag>.apk in the same directory.
<build-tag> should describe the newly uploaded build (e.g., the version string or
build number). Run this script on the droplet after uploading the new build.
EOF
}

if [[ $# -ne 2 ]]; then
    usage
    exit 1
fi

SOURCE_APK="$1"
BUILD_TAG="$2"

if [[ ! -f "$SOURCE_APK" ]]; then
    echo "Error: APK '$SOURCE_APK' does not exist or is not a file." >&2
    exit 1
fi

if [[ "$BUILD_TAG" =~ [^A-Za-z0-9._-] ]]; then
    echo "Error: Build tag may only contain letters, numbers, dots, underscores, or dashes." >&2
    exit 1
fi

TARGET_APK="${DEST_DIR}/${DEST_FILE}"
BACKUP_APK="${DEST_DIR}/DojoMate-${BUILD_TAG}.apk"

echo "Preparing to deploy:"
echo "  Source APK : $SOURCE_APK"
echo "  Backup file: $BACKUP_APK (new build snapshot)"
echo "  Target file: $TARGET_APK (public download)"

echo "Ensuring destination directory exists..."
sudo install -d -o www-data -g www-data -m 0755 "$DEST_DIR"

echo "Creating versioned snapshot of the new build..."
sudo install -o www-data -g www-data -m 0644 "$SOURCE_APK" "$BACKUP_APK"

echo "Deploying new APK to $TARGET_APK..."
sudo install -o www-data -g www-data -m 0644 "$SOURCE_APK" "$TARGET_APK"

echo "Deployment complete."
