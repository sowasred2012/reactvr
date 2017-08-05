import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
  Animated,
  Image
} from 'react-vr';
import Easing from 'react-native';

export default class WelcomeToVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotationValue: new Animated.Value(0),
      orbitXValue: new Animated.Value(0),
      orbitYValue: new Animated.Value(0),
      orbitZValue: new Animated.Value(-3),
    };
  }

  render() {
    var AnimatedSphere = Animated.createAnimatedComponent(Sphere)

    return (
      <View>
        <Pano source={asset('coast.jpg')}/>
        <AnimatedSphere 
          radius={0.5}
          widthSegments={20}
          heightSegments={12}
          texture={asset('globe.jpg')}
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [
              { translateX: this.state.orbitXValue },
              { translateY: this.state.orbitYValue },
              { translateZ: this.state.orbitZValue },
              { rotateY: this.state.rotationValue },
            ],
          }}
        />
      </View>
    );
  }

  componentDidMount() {
    this.runAnimation1()
  }

  runAnimation1() {
    this.state.rotationValue.setValue(0);
    this.state.orbitXValue.setValue(0);
    this.state.orbitYValue.setValue(0);
    this.state.orbitZValue.setValue(-3);

    Animated.timing(
      this.state.rotationValue,
      {
        toValue: 360,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start();

    Animated.timing(
      this.state.orbitXValue,
      {
        toValue: 3,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start();

    Animated.timing(
      this.state.orbitZValue,
      {
        toValue: 0,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start(() => this.runAnimation2());
  }

  runAnimation2() {
    this.state.rotationValue.setValue(0);
    this.state.orbitXValue.setValue(3);
    this.state.orbitYValue.setValue(0);
    this.state.orbitZValue.setValue(0);

    Animated.timing(
      this.state.rotationValue,
      {
        toValue: 360,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start();

    Animated.timing(
      this.state.orbitXValue,
      {
        toValue: 0,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start();

    Animated.timing(
      this.state.orbitZValue,
      {
        toValue: 3,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start(() => this.runAnimation3());
  }

  runAnimation3() {
    this.state.rotationValue.setValue(0);
    this.state.orbitXValue.setValue(0);
    this.state.orbitYValue.setValue(0);
    this.state.orbitZValue.setValue(3);

    Animated.timing(
      this.state.rotationValue,
      {
        toValue: 360,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start();

    Animated.timing(
      this.state.orbitXValue,
      {
        toValue: -3,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start();

    Animated.timing(
      this.state.orbitZValue,
      {
        toValue: 0,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start(() => this.runAnimation4());
  }

  runAnimation4() {
    this.state.rotationValue.setValue(0);
    this.state.orbitXValue.setValue(-3);
    this.state.orbitYValue.setValue(0);
    this.state.orbitZValue.setValue(0);

    Animated.timing(
      this.state.rotationValue,
      {
        toValue: 360,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start();

    Animated.timing(
      this.state.orbitXValue,
      {
        toValue: 0,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start();

    Animated.timing(
      this.state.orbitZValue,
      {
        toValue: -3,
        easing: Easing.linear,
        duration: 10000,
      } 
    ).start(() => this.runAnimation1());
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
