/**
 * Created by kobe on 2018/6/5.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl
} from 'react-native';

const {width, height} = require('Dimensions').get('window');

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxArr: Array.from(new Array(20)).map((val, idx) => (
                {text: "初始数据" + idx}
            )),
            isRefreshing: false,
            baseNum: 0

        }
    }

    render() {
        const arr = this.state.boxArr.map((val, idx) => (
            <Box key={idx} row={val} />
        ));

        return (
            <ScrollView style={styles.container}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        tintColor="#ff0000"
                        title="正在拼命加载..."
                        titleColor="#f00"
                        colors={['#000000', '#000000', '#000000']}
                        progressBackgroundColor="#0000ff"
                        onRefresh={() => this._fresh()}
                    />
                }
            >
                {arr}
            </ScrollView>
        )
    }

    _fresh(){
        //模拟请求数据过程,真实环境下,这里应该发送请求,然后在请求的回调中执行下面的函数体
        setTimeout(() => {
            const appendArr = Array.from(new Array(5)).map((val, idx) => ({
                text: "xxx新增数据" + (this.state.baseNum + idx)
            }));

            const newArr = appendArr.concat(this.state.boxArr);

            this.setState({
                boxArr: newArr,
                isRefreshing: false,
                baseNum: this.state.baseNum + 5
            })

        }, 2000)

    }

}
class Box extends Component {
    defaultProps: {
        row: {}
    };

    render() {
        return (
            <View style={styles.boxStyle}>
                <Text>{this.props.row.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "skyblue"
    },
    boxStyle: {
        backgroundColor: "yellow",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "red",
        justifyContent: "center",
        alignItems: "center"
    }

});