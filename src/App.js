import React from 'react';
import Card from './components/Card';

function App() {
    return (
        <div className="py-4">
            <div className="container">
                <h4>The Post</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Card content={{
                                imageUrl:"http://placekitten.com/g/200/200", 
                                title:"The first Post", 
                                published:"Published 06 Februari 2021"
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card content={{
                                imageUrl:"http://placekitten.com/g/200/200", 
                                title:"The second Post", 
                                published:"Published 06 Februari 2020"
                            }}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card content={{
                                imageUrl:"http://placekitten.com/g/200/200", 
                                title:"The third Post", 
                                published:"Published 06 Februari 2019"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;