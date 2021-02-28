---
path: /blogs/rn-install
title: 'Note: Install React Native'
tags: note, react-native
score: 90
date: 2020-02-27
---

# Note: React Native Install

## Install with react-native init

`npx react-native init MyTestApp`

If the result is the following error:

```shell
The following build commands failed:
	CompileC /Users/michaelduo/Library/Developer/Xcode/DerivedData/MyTestApp-fwbpudnniafxhoftwuursbouoded/Build/Intermediates.noindex/Pods.build/Debug-iphonesimulator/Flipper.build/Objects-normal/x86_64/FlipperRSocketResponder.o /Users/michaelduo/Desktop/projects/MyTestApp/ios/Pods/Flipper/xplat/Flipper/FlipperRSocketResponder.cpp normal x86_64 c++ com.apple.compilers.llvm.clang.1_0.compiler
```

Replace `use_flipper!` with `use_flipper!({ ‘Flipper-Folly’ => ‘2.3.0’ })` in Podfile, then remove Podfile.lock and run `pod install`

## Run the project

```shell
  Run instructions for iOS:
    • cd "/Users/michaelduo/Desktop/projects/MyTestApp" && npx react-native run-ios
    - or -
    • Open MyTestApp/ios/MyTestApp.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/michaelduo/Desktop/projects/MyTestApp" && npx react-native run-android

  Run instructions for Windows and macOS:
    • See https://aka.ms/ReactNative for the latest up-to-date instructions.
```

---

## Install with Expo

```shell
npm install --global expo-cli

# Create a new projectexpo init my-project
$ expo init my-project
```

If the result is this error:

```
Error: EMFILE: too many open files, watch
```

Reinstall watch man: `brew reinstall watchman` or

```shell
$ brew update
$ brew install watchman
```

Then we can start the app by running `yarn start`
We can eject by running `yarn eject`

If result in this error:

```shell
expo-updates must be configured with a valid update URL or scope key.
```

We need to add:

```
<key>EXUpdatesURL</key>
<string>https://example.com</string>
```

Under <project>/ios/<project_name>/Supporting/Expo.plist, now we can run `yarn start`.
It would be better to run `npx expo start`.
More details in: [Expo CLI - Expo Documentation](https://docs.expo.io/workflow/expo-cli/)

### Interesting Components

[React Native 常用第三方组件汇总 - 知乎](https://zhuanlan.zhihu.com/p/32418799)
Shared element animation:
[GitHub - IjzerenHein/react-native-shared-element: Native shared element transition “primitives” for react-native 💫](https://github.com/IjzerenHein/react-native-shared-element)
[Shared element transition tutorial](https://www.youtube.com/watch?v=83GNiMp-qq0)

## Reference

-   [Introduction · React Native](https://reactnative.dev/docs/getting-started)
-   [React Native BUILD FAILED on run-ios · Issue #26118 · Facebook/react-native · GitHub](https://github.com/facebook/react-native/issues/26118)
