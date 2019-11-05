import colors from './colors';
import fonts from './fonts';

export default {
  activeOpacity: 0.7,

  container: {
    backgroundColor: colors.white,
    flex: 1
  },

  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  navHeaderStyle: {
    backgroundColor: colors.black,
    borderBottomWidth: 0,
    elevation: 0
  },
  navHeaderTitleStyle: {
    flex: 1,
    fontFamily: fonts.regular,
    textAlign: 'center'
  },

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },

  mB8: { marginBottom: 8 },
  mB16: { marginBottom: 16 },

  mL8: { marginLeft: 8 },
  mL16: { marginLeft: 16 },

  mR8: { marginRight: 8 },
  mR16: { marginRight: 16 },

  mT8: { marginTop: 8 },
  mT16: { marginTop: 16 },

  mV16: { marginVertical: 16 },
  mV24: { marginVertical: 24 },
  mV32: { marginVertical: 32 },

  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },
  p24: { padding: 24 },

  pH4: { paddingHorizontal: 4 },
  pH8: { paddingHorizontal: 8 },
  pH16: { paddingHorizontal: 16 },
  pH24: { paddingHorizontal: 24 },

  pV8: { paddingVertical: 8 },
  pV16: { paddingVertical: 16 },
  pV24: { paddingVertical: 24 },

  spacer16: {
    height: 16,
    width: '100%'
  },
  spacer32: {
    height: 32,
    width: '100%'
  },
  spacer64: {
    height: 64,
    width: '100%'
  }
};
