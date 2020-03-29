import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginTop: 48,
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#41414d',
    marginTop: 24,
  },

  incidentValue: {
    fontSize: 15,
    color: '#737380',
    marginTop: 8,
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#13131a',
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380', 
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    width: '48%',
    height: 50,
    borderRadius: 8,
    backgroundColor: '#e82041',
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  }
});
