import * as React from 'react';
import {Text, SafeAreaView, TouchableOpacity, TouchableHighlight, View, Button, StyleSheet} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import MapView, {PROVIDER_GOOGLE, Marker, LatLng, Region} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';


import MenuIcon from '../assets/icons/menu.svg';
import RightArrowIcon from '../assets/icons/right-arrow.svg';

function WelcomeScreen({ navigation }){

    const map = React.createRef();

    const [coord, setCoord] = React.useState({
        latitude: 41.0391683,
        longitude: 28.9982707,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const onRegionChange = (changedRegion: Region) => {
        setCoord(changedRegion);
    };

    const zoomDelta = 0.005;

    const onZoom = (zoomSign) => {
        const zoomedRegion = {
            latitude: coord.latitude,
            longitude: coord.longitude,
            latitudeDelta: coord.latitudeDelta - zoomDelta * zoomSign,
            longitudeDelta: coord.longitudeDelta - zoomDelta * zoomSign,
        };
        setCoord(zoomedRegion);
        map.current.animateToRegion(zoomedRegion);
    };

    const onZoomIn = () => onZoom(1);
    const onZoomOut = () => onZoom(-1);


    Geolocation.watchPosition(
        (position) => {
            console.log(position);
            setCoord(position.coords);
        },
        (error) => {
            console.log(error);
        },
        {
            useSignificantChanges: true
        }
    );

    const renderContent = () => (
        <View style={styles.sheetContent}>
            <View style={styles.placeholder}>
                <TouchableHighlight onPress={() => {sheetRef.current.snapTo(1);}}>
                    <View style={styles.startButton}>
                        <Text style={styles.startButtonText}>where are we going?</Text>
                        <RightArrowIcon />
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );

    const sheetRef = React.useRef(null);
    React.useEffect(() => {
        sheetRef.current.snapTo(0);

        Geolocation.getCurrentPosition(
            (c) =>
                setCoord({
                    latitude: c.coords.latitude,
                    longitude: c.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }),
            (error) => console.log(error),
            {
                enableHighAccuracy: true,
            },
        );
    },[]);
    const fall = new Animated.Value(1);

    return (
        <>
            <BottomSheet
                ref={sheetRef}
                snapPoints={['17%', '90%', 1]}
                initialSnap={2}
                borderRadius={40}
                callbackNode={fall}
                renderContent={renderContent}
            />

            <MapView
                ref={map}
                provider={PROVIDER_GOOGLE}
                style={{flex: 1, height: '100%'}}
                initialRegion={coord}
                region={coord}
                showsUserLocation={true}
            >
                {coord !== undefined && <Marker coordinate={coord} />}
            </MapView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onZoomIn}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
                <View style={styles.spacer} />
                <TouchableOpacity style={styles.button} onPress={onZoomOut}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.hamburger}
                onPress={() => {navigation.openDrawer()}}
            >
                <MenuIcon width="20" height="20"  />
            </TouchableOpacity>

        </>
    )
}

const styles = StyleSheet.create({
    sheetContent: {
        backgroundColor: 'white',
        padding: 32,
        height: '100%'
    },
    hamburger: {
        position: 'absolute',
        top: 55,
        left: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 40,
        height: 40,
        marginLeft: 15,
        marginTop: 15,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 1,
    },
    buttonContainer: {
        position: 'absolute',
        top: 60,
        right: 20,
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 12,
    },
    button: {},
    text: {
        textAlign: 'center',
    },
    spacer: {
        marginVertical: 7,
    },
    startButton: {
        backgroundColor: '#F3F3FA',
        height: 47,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    startButtonText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16.94,
        color: '#2A3037'
    }
});

export default WelcomeScreen;