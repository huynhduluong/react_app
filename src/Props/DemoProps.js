import React, { Component } from 'react'
import ClassProps from './ClassProps';
import FunctionProps from './FunctionProps'

export default class DemoProps extends Component {
    type = "Husky";
    image = "https://petmaster.vn/petroom/wp-content/uploads/2020/03/thanh-bieu-cam-cho-husky.jpg";

    render() {
        return (
            <div>
                <h2>Demo Props</h2>
                {/* props dùng để truyền dữ liệu giữa các component */}

                {/* cách truyền dữ liệu */}
                <FunctionProps loaiCho={this.type} linkAnh={this.image} />

                <ClassProps typeDog={this.type} imgLink={this.image} />
            </div>
        )
    }
}
