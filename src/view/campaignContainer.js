import React from 'react';
import { connect } from 'react-redux';
import * as campaginStyles from '../resources/css/campaginStyles.scss';
import * as actions from '../actions/campaignActions';
import { Container, Header, Icon, Button, Segment, Divider, Grid, Modal, Input, TextArea } from 'semantic-ui-react';
import AddCampaignview from "./addCampaignView";

export class CampaignContainerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {   
        return (
            <Container>       
                <Header as='h3' attached='top'> 
                    <Icon name="list"/> 
                    <Header.Content>
                        Campaign list <AddCampaignview onAddCampaign={this.props.onAddCampaign}/>
                    </Header.Content>    
                </Header>
                <Segment attached>
                    <Grid columns={6} relaxed='very'>
                        <Grid.Column>
                            <p>
                                List
                            </p>
                            
                        </Grid.Column>
                        <Grid.Column>
                            <p>
                                History
                            </p>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical></Divider>
                </Segment>
            </Container>
              
        )
    }
}
export default connect(
    (store, ownProps)=>{
        return{
            campaignList : store,
            ...ownProps
        }
    },
    (dispatch)=>{
        return{
            onStart: () => {
                dispatch();
            },

            onAddCampaign : (campObj)  => {
                dispatch(actions.onAddCampaign(campObj))
            }
        }
    }
)(CampaignContainerComponent);