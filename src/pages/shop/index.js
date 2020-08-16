import React, { Component } from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/Preview/Preview-collection'
class index extends Component {
    state = {
        collection:ShopData
    }
    render() {
        const {collection}=this.state
        return (
            <>
              <div className="shop-page">
                  {
                      collection.map(({id, ...otherCollectionProps}) => (
                          <CollectionPreview key={id} {...otherCollectionProps}/>
                      ))
                  }
              </div>
            </>
        );
    }
}

export default index;
