// YourComponent.tsx
import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client'
import client from './ApolloClient';
import { Text, View } from 'react-native';
import { styles } from './styles';

const STAR_WARS_QUERY = gql`
    query AllStarships {
        allStarships {
            starships {
                MGLT
                cargoCapacity
                consumables
                costInCredits
                created
                crew
                edited
                hyperdriveRating
                id
                length
                manufacturers
                maxAtmospheringSpeed
                model
                name
                passengers
                starshipClass
            }
        }
    }
`;

const ApiRequest: React.FC = () => {
    const { loading, error, data } = useQuery(STAR_WARS_QUERY, { client });
  
    useEffect(() => {
      if (loading) {
        console.log('Loading...');
      }
  
      if (error) {
        console.error('Error:', error);
      }
  
      if (data) {
        console.log('GraphQL Response:', data);
      }
    }, [loading, error, data]);
  
    return (
        <View style={styles.box}>
            <Text style={styles.labelText}>Reponse</Text>
        </View>
      
    );
  };
  
  export default ApiRequest;