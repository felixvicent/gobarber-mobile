import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Avatar, Container, Left, Info, Name, Time } from './styles';

const Appointment = () => (
  <Container>
    <Left>
      <Avatar
        source={{
          uri:
            'https://lh3.googleusercontent.com/6dsHVQR36uxpdAdCglKg9gs--PMXAh8snbjoMyMqkWAxlKrLk1ZQOfLLDg6TL38tOOkq-XzEPM3NxojQAQ6rZz8ZOeLXxK3N1wpBkP4lR8_CVa4l7-PlAzf3_H7uYr6Yy8szbXu25OcM7JrdW1eBHxsJGMqpXywMyLHmBlwyRhp3RvxpuBYrATbOJhaYWAQNorDCX6AokeXaf9usmLDyAdNVlljsypcNlchEJVw07YgZA9CNdXwyq2xLR1ZhLfDEwGlTEYRHdXo_jsyj-VqH8HzF-xaWtdPk6odh69mqgHOImVFrUerHB40GRTpxR8j43jpxqivYNMHvm6B-2G7A-11w3nwK3bjG-MzRRA-L3_OuqFp43W7EVVchfQknLUBYAMuuW1Jmr_oEoCNswPZEnTNhV6Kt_Pe4oFh_--R3L-3HZrTtfUjuZeUPStE620KfYyAedjD95pybH14d5oCCk-sBe4vMbfzfi_rHIfDC8I7LWLI9-ZGFwYuKu3HuMQQz8IiiSEZFWbHeQSqUlcqdEhC4vD5rrtc1UcqBNcoVRdp7QB755gBBfyuJdOD7HX2aVUe8FOJnqaV8JmW8iHa1jbiyN8emb5hLKgPBQAf9jazTB9dctGu4KtCmpvC1I6DHL-LZcCqXyhmyBwAxVpqAGBl50WteENBDBCFJUwUSEjsp1IuhVLGYD4yrxGtu=w621-h828-no?authuser=0',
        }}
      />
      <Info>
        <Name>Félix Vicente</Name>
        <Time>em 3 horas</Time>
      </Info>
    </Left>

    <TouchableOpacity onPress={() => {}}>
      <Icon name="event-busy" size={20} color="#f64c75" />
    </TouchableOpacity>
  </Container>
);

export default Appointment;
