import React,{Component} from 'react'
import {
  MainContainer,
  StarIcon,
  IconEdit,
}from '../../components'
import{
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
} from '../../components/restaurantViewComponents'

class RestaurantView extends Component{
  render(){
    return (
      <MainContainer>
        <TopContainer>
          <Img source = {require('../../assets/img/restaurant.jpg')}/>
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
              single/>
          </BottomContainerCenter>
          <BottomContainerDown>
            <LocationContainer>
              <IconEdit
                name = 'map-marker'
                size = {25}
              />
              <TextContainer>
                <TextGray>Calle Pino Suarez .Esq. Constitucion #153 Col. Tabasco 2000, Villahermosa, Tabasco</TextGray>
              </TextContainer>
            </LocationContainer>
            <LineContainer>
              <StickContainer>
                <IconEdit
                name = 'motorcycle'
                size = {19}
                />
                <TextContainer>
                  <TextGray>30 min. aprox.</TextGray>
                </TextContainer>
              </StickContainer>
              <StickContainer>
                <IconEdit
                name = 'tag'
                size = {20}
                />
                <TextContainer>
                  <TextGray>$120.00</TextGray>
                </TextContainer>
              </StickContainer>
            </LineContainer>
            <LineContainer>
              <StickContainer>
                <IconEdit
                name = 'clock-o'
                size = {20}
                />
                <TextContainer>
                  <TextGray>09:00 - 20:00</TextGray>
                </TextContainer>
              </StickContainer>
              <StickContainer>
                <IconEdit
                name = 'phone'
                size = {20}
                />
                <TextContainer>
                  <TextGray>(993)263-74-17</TextGray>
                </TextContainer>
              </StickContainer>
            </LineContainer>
            <SocialsContainer>
              <IconEdit
                name = 'whatsapp'
                size = {25}
              />
              <IconEdit
                name = 'facebook'
                size = {25}
              />
              <IconEdit
                name = 'twitter'
                size = {25}
              />
              <IconEdit
                name = 'instagram'
                size = {25}
              />
            </SocialsContainer>
          </BottomContainerDown>
        </BottomContainer>
      </MainContainer>
    )
  }

}
export default RestaurantView
