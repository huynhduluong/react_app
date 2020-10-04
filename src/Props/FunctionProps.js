import React from 'react'

//cách nhận dữ liệu từ props

export default function FunctionProps(props) {
    return (
        <div>
            <h3>Function props</h3>
            <p>Type : {props.loaiCho} </p>
            <img src={props.linkAnh} alt="hình đẹp" />
        </div>
    )
}
