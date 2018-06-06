/**
 * Created by kobe on 2018/6/6.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

const {width, height} = require('Dimensions').get('window');
const wineData = require('../localData/Wine.json');

export default class Lv extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: ds.cloneWithRows([''])
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderHeader={this._renderHeader}
                renderFooter={this._renderFooter}
            />
        )
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(wineData)
        })
    }

    _renderRow(rowData, sectionId, rowId) {
        return (
            <TouchableOpacity
                style={styles.rowSty}
                onPress={() => { alert("点击了" + sectionId + "组第" + rowId + "行")}}
            >
                {/*左边*/}
                <Image source={{uri: rowData.image}} style={styles.imgSty}/>

                {/*右边*/}
                <View style={styles.rightSty}>
                    {/*上*/}
                    <Text>{rowData.name}</Text>

                    {/*下*/}
                    <Text>{rowData.money}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _renderHeader(){
        return (
            <View style={styles.headerSty}></View>
        )
    }

    _renderFooter() {
        return (
            <View style={styles.footerSty}></View>
        )
    }
}

const styles = StyleSheet.create({
    headerSty: {
        width: width,
        height: 30,
        backgroundColor: "skyblue"
    },
    footerSty: {
        width: width,
        height: 20,
        backgroundColor: "yellow"
    },
    rowSty: {
        flexDirection: "row",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    imgSty: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    rightSty: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: "space-around"
    }
})


