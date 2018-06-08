import React from 'react';
import moment from 'moment';
import { Button, Image, Item, Header, Card, Icon } from 'semantic-ui-react';

function RestaurantsList(props) {
  return (
    <div style={{marginTop: -25}}>
      {props.restaurantsSelected.map((restaurant, index) => {
        return (
          <Card fluid key={restaurant.id}>
            <Item.Group>
              <Item>
                <Item.Image className='restaurant-image'
                  size='small'
                  src={ restaurant.image_url }
                  style={ {margin: 15} }
                />
                <Item.Content>
                  <Item.Header style={ {marginTop: 20} } className='restaurant-name'>{ `${index + 1}. ${restaurant.name}` }</Item.Header>
                  <Item.Image>
                    <span className='restaurant-rating'>
                      <Image
                        src={`/media/yelp_stars/regular_${(restaurant.rating).toString().replace('.5', '_half')}.png`}
                      />
                    </span>
                    <span style={ {marginLeft: 5} } > {restaurant.review_count} reviews</span>
                  </Item.Image>
                  <Item.Description>
                    {restaurant.display_address.map(address => {
                      return address
                    }).join(', ')}
                  </Item.Description>
                  <Button onClick={() => {props.handleDeleteClick(restaurant)}}>Delete</Button>
                  <Item.Extra>
                    {restaurant.price ?
                      ( <span>{restaurant.price }</span> ) : '---'
                    }
                    <span style={ {paddingLeft: 5}}>{` ● `}</span>
                    <Icon name='food' fitted style={ {paddingLeft: 10}}/> {restaurant.categories.map(category => {
                      return category.title
                    }).join(', ')}
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Card>
        )
      })}
    </div>
  )
}

export default RestaurantsList;