import React from 'react';
import { render } from 'react-dom';

import Tree from './Tree';
import RecursiveTree from './RecursiveTree';
import IterativeTree from './IterativeTree';

import '../css/App.css';

let data = {"name": "~", 
            "children": [{"name": "Lorem", "children": [
                            {"name": "Ipsum"},
                            {"name": "Dolor", "children":[
                                {"name": "Orci", "children": [
                                    {"name": "Quis", "children": [
                                        {"name": "Odio"}
                                    ]}
                                ]}
                            ]},
                        ]},
                        {"name": "Sit", "children": [
                            {"name": "Amet"},
                            {"name": "Consectetur", "children": [
                                {"name": "Adipiscing"},
                                {"name": "Elit"},
                            ]},
                            {"name": "Vestibulum"}
                        ]},
                        {"name": "Vitae"}]
            };


render(
    <div className="trees">
        <div>
            <h2>RecursiveTree</h2>
            <Tree data={ data }> 
                 <RecursiveTree/>
            </Tree>
        </div>
        <div>
            <h2>IterativeTree</h2>
            <Tree data={ data }> 
                 <IterativeTree depthMargin="20"/>
            </Tree>
        </div>
    </div>,
  document.getElementById('content')
);