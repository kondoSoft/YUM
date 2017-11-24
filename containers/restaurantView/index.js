import React, {Component} from 'react'
import {
  MainContainer,
  StarIcon,
  IconEdit
} from '../../components'
import {
  TopContainer,
  BottomContainer,
  BottomContainerUp,
  BottomContainerCenter,
  BottomContainerDown,
  Img,
  TitleContainer,
  TitleText,
  OrangeText,
  OrangeTextContainer,
  TextGray,
  LocationContainer,
  LineContainer,
  SocialsContainer,
  TextContainer,
  StickContainer,
  Touch,
} from '../../components/restaurantViewComponents'
import {
  StatusBar,
  Platform,
  Linking
} from 'react-native'

class RestaurantView extends Component{
  render(){
    const urlToOpen = 'tel:5219931175435'
    return (
      <MainContainer>
        <StatusBar
          hidden={Platform.OS !== 'ios'}
          backgroundColor='#ff5722'
          barStyle='light-content'
          setTranslucent
        />
        <TopContainer>
          <Img source={require('../../assets/img/restaurant.jpg')} />
        </TopContainer>
        <BottomContainer>
          <BottomContainerUp>
            <TitleContainer>
              <TitleText>Los Danzantes</TitleText>
            </TitleContainer>
            <OrangeTextContainer>
              <OrangeText>Comida mexicana</OrangeText>
              <OrangeText>Comida regional</OrangeText>
              <OrangeText>Bar</OrangeText>
            </OrangeTextContainer>
          </BottomContainerUp>
          <BottomContainerCenter>
            <StarIcon
              qualification='4.5'
              justify='center'
              single />
          </BottomContainerCenter>
          <BottomContainerDown>
            <LocationContainer>
              <IconEdit
                name='map-marker'
                size={25}
              />
              <TextContainer>
                <TextGray>Calle Pino Suarez .Esq. Constitucion #153 Col. Tabasco 2000, Villahermosa, Tabasco</TextGray>
              </TextContainer>
            </LocationContainer>
            <LineContainer>
              <StickContainer>
                <IconEdit
                  name='motorcycle'
                  size={19}
                />
                <TextContainer>
                  <TextGray>30 min. aprox.</TextGray>
                </TextContainer>
              </StickContainer>
              <StickContainer>
                <IconEdit
                  name='tag'
                  size={20}
                />
                <TextContainer>
                  <TextGray>$120.00</TextGray>
                </TextContainer>
              </StickContainer>
            </LineContainer>
            <LineContainer>
              <StickContainer>
                <IconEdit
                  name='clock-o'
                  size={20}
                />
                <TextContainer>
                  <TextGray>09:00 - 20:00</TextGray>
                </TextContainer>
              </StickContainer>
              <Touch onPress = {()=> Linking.openURL(urlToOpen)}>
              <StickContainer>
                  <IconEdit
                    name='phone'
                    size={20}
                  />
                <TextContainer>
                  <TextGray>(993)263-74-17</TextGray>
                </TextContainer>
              </StickContainer>
            </Touch>
            </LineContainer>
            <SocialsContainer>
              <Touch onPress = {()=> Linking.openURL('whatsapp://send?text=helloFromYUM-I-want-to-buy-some-Food&phone=5219931175435')}>
                <IconEdit
                  name='whatsapp'
                  size={25}
                />
              </Touch>
              <Touch onPress = {()=>Linking.openURL('https://www.facebook.com/')}>
                <IconEdit
                  name='facebook'
                  size={25}
                />
              </Touch>
              <Touch onPress = {()=>Linking.openURL('https://twitter.com/')}>
                <IconEdit
                  name='twitter'
                  size={25}
                />
              </Touch>
              <Touch onPress = {()=>Linking.openURL('https://instagram.com/')}>
                <IconEdit
                  name='instagram'
                  size={25}
                />
              </Touch>
            </SocialsContainer>
          </BottomContainerDown>
        </BottomContainer>
      </MainContainer>
    )
  }
}
export default RestaurantView
