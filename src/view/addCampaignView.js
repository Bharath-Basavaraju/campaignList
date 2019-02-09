import React from 'react';
import { connect } from 'react-redux';
import { Header, Icon, Button, Modal, Input, TextArea } from 'semantic-ui-react';


export default class AddCampaignComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                campaignName : "",
                Comments : ""
        }
    }

    upDateCampaignName(e){
        this.setState({
            campaignName: e.target.value
        });
    }
        
    upDateCampaignComment(e){
        this.setState({
            Comments: e.target.value
        });      
    }


    render() {   
        return (
            <Modal size={"mini"} open={this.state.showModal} closeIcon trigger={<Button className="addBtn"  icon='plus' content="Create New" primary ></Button>} >
                <Header as="h5" content='Add Campaign'></Header>
                <Modal.Content>
                <Input
                    iconPosition='left'
                    label={{ content: 'Campaign Name' }}
                    labelPosition='left'
                    placeholder='Enter Campaign name'
                    onChange = {(e) => {}}
                />
                <TextArea rows={3} placeholder='Add Comments' style={{ width: "100%", marginTop:"1rem" }} onChange={ (e) => {}} />
                </Modal.Content>
                <Modal.Actions>
                    <Button positive icon='checkmark' labelPosition='right' content='Add'
                    onClick={() => {this.props.onAddCampaign(this.state)}}
                     />
                </Modal.Actions>
            </Modal>
        )
    }
}
