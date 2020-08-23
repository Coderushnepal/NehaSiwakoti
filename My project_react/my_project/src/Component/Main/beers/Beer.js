import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import BeerModal from "./BeerModal";
import {favoriteBeersActions} from '../../../actions'

class Beer extends Component{
    constructor(props){
        super(props)
        this.state = {
            showModal:false, 
            isFavorite:false,

        };
    }
    handleModalOpen = () =>{
        this.setState({
            showModal:true,

        });
    };
    handleModalClose = () =>{
        this.setState({
            showModal:false,
        });
    };

    toggleFavourites = () => {
        const {
          favoriteBeers,
          addFavoriteBeer,
          removeFavoriteBeer,
          info,
        } = this.props;
        let beerIndex = favoriteBeers.findIndex((beer) => beer.id === info.id);
        if (beerIndex > -1) {
            removeFavoriteBeer(info.id);
        } else {
            addFavoriteBeer(info);
        }
      };
    
    
    render(){
        
        
        const {isFavorite , showModal} =this.state;
        const{id, name, description, image_url} = this.props.info;
        const beerIndex = this.props.favoriteBeers.findIndex(
            (beer) => beer.id === id
          );
        return(
            <Fragment>
                {showModal?
                ( <BeerModal
                     show={showModal} 

                     handleClose ={this.handleModalClose}
                     beerId={id}
                     />
                ):null}
                
            <div className="card">
            <span className={`favourite ${beerIndex > -1 ? "active" : ""}`}>
            <i
              className={`${beerIndex > -1 ? "fas" : "far"} fa-star`}
              onClick={this.toggleFavourites}
            />
          </span>
                <div className="card__imgcontainer" style={{ backgroundImage:`url(${image_url})`}} />
                <h2 onClick={this.handleModalOpen}>
                    {name} {this.props.abc}
                    </h2>
                          
                <span className="card__description">
                   {description}
                </span>
                
            </div>
                
                </Fragment>
        );
    }
}
Beer.propTypes ={
    info:PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        description:PropTypes.string,
        image_url:PropTypes.string,

    }),
};

const mapStateToProps = ({favoriteBeersReducer}) => {
    return {
        favoriteBeers: favoriteBeersReducer.favoriteBeers ,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      // action: bindActionCreators({ ...favouriteBeersActions }, dispatch),
      ...bindActionCreators({ ...favoriteBeersActions }, dispatch),
    };
  };
  
export default connect(mapStateToProps,mapDispatchToProps)(Beer);