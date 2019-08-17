
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity,Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default class App extends Component {
  constructor() {  
    super();  
    this.state = { screenWidth: "", screenHeight: "" }  
    }  
    getScreenSize = () => {  
        const screenWidth = Math.round(Dimensions.get('window').width);  
        const screenHeight = Math.round(Dimensions.get('window').height);  
        this.setState({ screenWidth: screenWidth, screenHeight: screenHeight })  
        }  
  render() {
    return (
      <View style={{ position: 'relative', width: '100%', height: '100%', borderWidth: 2 }}>
        <Image
          style={{ width: 212, height: 188, position: 'absolute', top: 0, left: 0, resizeMode: 'contain' }}
          source={require('../Personal/assets/top.png')}
        />
        <Image
          style={{ width: 240, height: 240, position: 'absolute', top: 0, left: '15%', resizeMode: 'contain' }}
          source={require('../Personal/assets/avarta.png')}
        />
        <Image
          style={{ width: "26%", height: "26%", position: 'absolute', top: 0, right: '5%', resizeMode: 'contain' }}
          source={require('../Personal/assets/money.png')}
        />
        <Text style={{ color: "#9D9797", fontSize:14 , fontFamily: 'Roboto-LightItalic', position: 'absolute', top: screenWidth <= 420 ? "150%" : "24%", alignSelf: 'center' }}>User: Trần Đỗ Minh Ân</Text>
        <Text style={{ color: "#9D9797", fontSize: 14, fontFamily: 'Roboto-LightItalic', position: 'absolute', top: screenWidth <= 420 ? "150%" : "2%", alignSelf: 'center' }}>ID: 101464873</Text>
        <Text style={{ color: "#000", fontSize: 34, fontFamily: 'Roboto-Regular', position: 'absolute', top: '30%', alignSelf: 'center' }}>ĐĂNG KÝ DỊCH VỤ!</Text>
        <Text style={{ color: "#9D9797", fontSize: 16, fontFamily: 'Roboto-LightItalic', position: 'absolute', top: '38%', alignSelf: 'center' }}>SuBee Team Freelance tại FPTPOLY</Text>
        <Text style={{ color: "#9D9797", fontSize: 14, fontFamily: 'Roboto-LightItalic', position: 'absolute', top: '41%', alignSelf: 'center' }}>Cam kết dịch vụ với sự chuyên nghiệp</Text>
        <Text style={{ color: "#9D9797", fontSize: 14, fontFamily: 'Roboto-LightItalic', position: 'absolute', bottom: '24%', alignSelf: 'center' }}>Qúy khách hàng vui lòng liên hệ chi tiết</Text>
        <Text style={{ color: '#000', fontFamily: 'Roboto-Regular', fontSize: 12, position: 'absolute', bottom: '20%', alignSelf: 'flex-start', left: '22%' }}>Tháng 8</Text>
        <Text style={{ color: "#9D9797", fontSize: 12, fontFamily: 'Roboto-LightItalic', position: 'absolute', bottom: '20%', alignSelf: 'flex-start', left: '34%' }}>Sẽ có chương trình khuyến mãi</Text>
        <TouchableOpacity
          style={{ width: '60%', height: "6%", position: 'absolute', bottom: '10%', resizeMode: 'contain', alignSelf: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 21, backgroundColor: '#494A9D', zIndex: 5 }}
          source={require('../Personal/assets/dangky2.jpg')}>
          <Text style={{ fontFamily: 'Roboto-Bold', fontSize: 12, color: '#fff', alignSelf: 'center', padding:'5%' }}>ĐĂNG KÝ DỊCH VỤ</Text>
        </TouchableOpacity>
        <Image
          style={{ width: 59, height: 59, position: 'absolute', bottom: 0, right: 0, resizeMode: 'contain', zIndex: 99 }}
          source={require('../Personal/assets/qr.png')}
        />
        <Image
          style={{ width: 120, height: 120, position: 'absolute', top: '40%', left: '-5%', resizeMode: 'contain', zIndex: 99 }}
          source={require('../Personal/assets/cash.png')}
        />
        <Image
          style={{ width: 83, height: 83, position: 'absolute', bottom: '20%', left: '0%', resizeMode: 'contain', zIndex: 99 }}
          source={require('../Personal/assets/money2.png')}
        />
        <Image
          style={{ width: 104, height: 85, position: 'absolute', bottom:screenWidth <= 420 ? "40%" : "45%", left: '20%', resizeMode: 'contain', zIndex: 99 }}
          source={require('../Personal/assets/boxtop.png')}
        />
        <Image
          style={{ width: 60, height: 42, position: 'absolute', top: '44%', left: '26%', resizeMode: 'contain', zIndex: 999 }}
          source={require('../Personal/assets/coin.png')}
        />
        <Image
          style={{ width: 82, height: 40, position: 'absolute', top: '44%', left: '53%', resizeMode: 'contain', zIndex: 999 }}
          source={require('../Personal/assets/giamgia.png')}
        />
        <Text style={{ color: '#B9B9C1', fontSize: 20, fontFamily: 'Roboto-Bold', position: 'absolute', bottom: screenWidth <= 500 ? "36%" : "40%", left: '26%', zIndex: 9999 }}>$23.99</Text>
        <Text style={{ color: '#000', fontSize: 20, fontFamily: 'Roboto-Bold', position: 'absolute', bottom: screenWidth <= 500 ? "36%" : "40%", right: '28%', zIndex: 9999 }}>$23.99</Text>
        <Text style={{ color: '#B9B9C1', fontSize: 12, fontFamily: 'Roboto-Bold', position: 'absolute', bottom: screenWidth <= 500 ? "32%" : "37%", left: '25%', zIndex: 9999 }}>$7.99 / tháng</Text>
        <Text style={{ color: '#B9B9C1', fontSize: 12, fontFamily: 'Roboto-Bold', position: 'absolute', bottom: screenWidth <= 500 ? "32%" : "37%", right: '27%', zIndex: 9999 }}>$7.99 / tháng</Text>
        <Text style={{ color: '#000', fontSize: 17, fontFamily: 'Roboto-Bold', position: 'absolute', bottom: screenWidth <= 420 ? "44%" : "47%", right: '26%', zIndex: 9999 }}>12 THÁNG</Text>
        <Text style={{ color: '#000', fontSize: 17, fontFamily: 'Roboto-Bold', position: 'absolute', bottom: screenWidth <= 420 ? "44%" : "47%", left: '24%', zIndex: 9999 }}>3 THÁNG</Text>
        <Text style={{ color: '#fff', fontSize: 10, fontFamily: 'Roboto-Bold', position: 'absolute', bottom: screenHeight <= 700 ? "52%" : "53%", right: '28%', zIndex: 9999 }}>Tiết kiệm 50%</Text>

        <Image
          style={{ width: 21, height: 21, position: 'absolute', top: 8, right: 8, resizeMode: 'contain', zIndex: 99 }}
          source={require('../Personal/assets/battery.png')}
        />
        <Image
          style={{ width: 104, height: 85, position: 'absolute', bottom: screenHeight <= 700 ? "28%" : "31%", left: '20%', resizeMode: 'contain', zIndex: 99 }}
          source={require('../Personal/assets/boxdown.png')}
        />
        <Image
          style={{ width: 104, height: 85, position: 'absolute', bottom: screenWidth <= 420 ? "40%" : "45%", left: '50%', resizeMode: 'contain', zIndex: 99 }}
          source={require('../Personal/assets/boxtopgreen.png')}
        />
        <Image
          style={{ width: 104, height: 85, position: 'absolute', bottom: screenHeight <= 700 ? "28%" : "31%", left: '50%', resizeMode: 'contain', zIndex: 99 }}
          source={require('../Personal/assets/boxdown.png')}
        />
        <Text style={{ color: '#090909', fontFamily: 'Roboto-LightItalic', position: 'absolute', bottom: 6, left: 6 }}>Copyright By Ân Trần</Text>
        <Image
          style={{ width: 194, height: 248, position: 'absolute', bottom: 0, right: 0, resizeMode: 'contain' }}
          source={require('../Personal/assets/bottom.png')}
        />
      </View>
    );
  }
}

