/**
 * Created by kobe on 2018/6/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    PixelRatio
} from 'react-native'

const {width, height} = require('Dimensions').get('window');

const shareData = require('../localData/shareData.json').data;

export default class Lv1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                contentContainerStyle={styles.boxSty}
            />
        )
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(shareData)
        })
    }

    _renderRow(rowData, sectionId, rowId){
        return (
            <View style={styles.cellSty}>
                <Image source={{uri: rowData.icon}} style={styles.imgSty} />
                <Text>{rowData.title}</Text>
            </View>
        )
    }

    _renderHeader() {
        return (
            <View style={styles.headerSty}>
                <Text style={{color: "#fff"}}>头部导航区域</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    headerSty: {
        width: width,
        height: 50,
        backgroundColor: "skyblue",
        justifyContent: "center",
        alignItems: "center"
    },
    boxSty: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"

    },
    cellSty: {
        width: 120,
        height: 120,
        alignItems: "center"

    },
    imgSty: {
        width: 80,
        height: 80
    }
});