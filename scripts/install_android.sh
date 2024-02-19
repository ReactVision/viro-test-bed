
package=com.rc04.nativevision

echo '========================================================================='
echo 'Uninstall test bed from device'
echo '========================================================================='

adb uninstall com.rc04.nativevision

echo '========================================================================='
echo 'Build aab using eas build --local'
echo '========================================================================='

eas build --local --platform android --profile development

# THIS SECTION IS COMMENTED OUT FOR A REASON! IF PROFILE IS NOT DEVELOPMENT, FOLLOW THESE STEPS.
# echo '========================================================================='
# echo 'Create apk using bundletool'
# echo '========================================================================='

# buildPath=$(ls build-*.aab)
# bundletool build-apks --bundle=$buildPath --output=app-release.apks

# echo '========================================================================='
# echo 'Install apk using bundletool'
# echo '========================================================================='

# bundletool install-apks --apks=app-release.apks
# OTHERWISE, eas build creates an APK file.

buildPath=$(ls build-*.apk)

echo '========================================================================='
echo 'Install apk using adb'
echo '========================================================================='

adb install $buildPath
adb shell am start -n $package/$package.MainActivity

echo '========================================================================='
echo 'Remove aab and apks files and android/'
echo '========================================================================='

rm -f *.aab
rm -f *.apks
rm -rf android/