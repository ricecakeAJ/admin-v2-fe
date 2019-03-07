import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title=this.props.title+"- Jaina's MMall";
    }
    render(){
        return(
        <div className="row">
            <div className="col-md-12">{/*在中等屏幕大小占12个格*/}
                <h1 className="page-header">{this.props.title}</h1>
                {this.props.children}{/*将PageTitle做成容器*/}
            </div>
        </div>

        )
    }
}

export default PageTitle;