import NetInfo from "@react-native-community/netinfo";

export const checkconnected = () =>{
    return NetInfo.fetch().then(state => {
        return state.isConnected;
    })
}