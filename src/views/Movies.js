import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import * as MovieService from '../api/services/Movies';

function MoviesScreen(){

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);
        MovieService.fetch()
            .then(movies => {
                console.log(movies);
                setData(movies);
            })
            .catch(e => setError(e))
            .finally(() => setLoading(false));
    }, []);

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {loading && <Text>Loading...</Text>}
                {error && <Text>Error: {error}</Text>}
                {data && data.map((movie, index) =>
                    <TouchableOpacity key={index} style={styles.movieItem}>
                        <Text>{movie.title}</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 20
    },
    movieItem: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }
})

export default MoviesScreen;