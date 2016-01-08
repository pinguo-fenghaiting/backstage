var HeadView = React.createClass({

    render:function(){

        return (
                <div className="title">
                    <strong className="l">
                        {this.props.value}
                    </strong>
                    <span className="r"></span>
                </div>
            );
    }
});

module.exports = HeadView;