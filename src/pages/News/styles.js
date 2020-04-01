import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  textDay: {
    fontSize: 22,
    color: '#737380',
  },

  postCard:{
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 24,
    marginBottom: 16,
    marginTop: 16,
  },

  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: "wrap",
  },

  textName: {
    fontSize: 22,
    fontWeight: "bold",
  },

  textLevel: {
    left: 40
  },

  textHour:{
    fontWeight: 'bold',
  },

  postNotice: {
    marginTop: 10,
  },

  textTitleNotice: {
    fontSize: 15,
    color: '#0A77C9',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  textBodyNotice:{
    fontSize: 13
  },

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },

  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold',
  },
});