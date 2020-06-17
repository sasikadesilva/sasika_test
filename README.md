# sasika_test

to generate apk 
 
this need only first time :  

You can add code in node_modules/react-native/react.gradle. 
After doFirst
doLast {
def moveFunc = { resSuffix ->
File originalDir = file("$buildDir/generated/res/react/release/${resSuffix}");
if (originalDir.exists()) {
File destDir = file("$buildDir/../src/main/res/${resSuffix}");
ant.move(file: originalDir, tofile: destDir);
}
}
moveFunc.curry("drawable-ldpi").call()
moveFunc.curry("drawable-mdpi").call()
moveFunc.curry("drawable-hdpi").call()
moveFunc.curry("drawable-xhdpi").call()
moveFunc.curry("drawable-xxhdpi").call()
moveFunc.curry("drawable-xxxhdpi").call()
moveFunc.curry("raw").call()
}




cd android/ &&  ./gradlew bundleRelease 
cd android/ && ./gradlew assembleRelease
