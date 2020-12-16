import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Avatar, Container, Left, Info, Name, Time } from './styles';

const Appointment = ({ data, onCancel }) => {
  const dateParsed = useMemo(
    () =>
      formatRelative(parseISO(data.date), new Date(), {
        locale: pt,
        addSufix: true,
      }),
    [data.date]
  );

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: data.provider.avatar
              ? data.provider.avatar.url
              : 'https://ui-avatars.com/api/?name=F%C3%A9lix+Vicente',
          }}
        />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
};

Appointment.propTypes = {
  data: PropTypes.shape({
    provider: PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
    date: PropTypes.string,
    past: PropTypes.bool,
    cancelable: PropTypes.bool,
    canceled_at: PropTypes.string,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Appointment;
