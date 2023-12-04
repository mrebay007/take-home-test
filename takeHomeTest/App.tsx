/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import ApiRequest from './ApiRequest';
import type {PropsWithChildren} from 'react';
import { styles } from './styles';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
    title: string;
}>;



function Section({children, title}: SectionProps): JSX.Element {
    
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text
                style={[
                    styles.sectionTitle,
                    {
                        color: isDarkMode ? Colors.white : Colors.black,
                    },
                ]}>
                {title}
            </Text>
            <Text
                style={[
                    styles.sectionDescription,
                    {
                        color: isDarkMode ? Colors.light : Colors.dark,
                    },
                ]}>
                {children}
            </Text>
        </View>
    );
}

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    
    return (
        <ApolloProvider client={client}>
            <ApiRequest />
            <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Section title="Star Wars Locator">
                        <View style={styles.section}>
                            <View style={styles.container}>
                                <Text style={styles.labelText}>TrueNorth</Text>
                            </View>
                            <View style={styles.container}>
                                <Text style={styles.labelText}>Mike Eberhardt</Text>
                            </View>
                        </View>
                    </Section>
                    <Section title="Enable Location">
                        <TouchableOpacity style={styles.btnSecondary}> 
                            <Text style={styles.btnTextSecondary}>
                                Enable Location Access
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}> 
                            <Text style={styles.btnText}>
                                Request Changes
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.infoText}>* Lorem Ispum Dolor Set Ament</Text>
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
        </ApolloProvider>

    );
}

export default App;
