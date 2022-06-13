import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export const RestaurantInfo = ({ restaurant }) => {
    const {
        name = "Amazing Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant;

    const LeftContent = props => <Avatar.Icon {...props} icon={icon} />


    return (
        <>
            <Card elevation={5} style={styles.card}>
                <Card.Title title={name} subtitle={address} left={LeftContent} />
                <Card.Content>
                    <Title>'Ooh food'</Title>
                </Card.Content>
                <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
                <Card.Actions>
                    <Button>Order</Button>
                    <Button>Favourite</Button>
                </Card.Actions>
            </Card>
        </>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white'
    },
    cover: { padding: 20, backgroundColor: 'white' },
    title: { padding: 16, }
})