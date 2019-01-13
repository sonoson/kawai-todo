import React, {Component} from "react";
import {View, Text , TouchableOpacity, StyleSheet, Dimensions} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends Component{
  state = {
    isEditing: false,
    isCompleted: false,
  };
    render(){
      const { isCompleted } = this.state;
        return(
          <View style = {styles.container}>
          <TouchableOpacity onPress= {this._toggleComplete}>
            <Text> Hello , To do </Text>
          </TouchableOpacity>
          </View>
        );
    }
}
_toggleComplete = event => {
  event.stopPropagation();
  const { isCompleted, uncompleteToDo, completeToDo, id } = this.props;
  if (isCompleted) {
    uncompleteToDo(id);
  } else {
    completeToDo(id);
  }
};

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
      },
      circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 20
      },
      completedCircle: {
        borderColor: "#bbb"
      },
      uncompletedCircle: {
        borderColor: "#F23657"
      },
      text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
      },
      completedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
      },
      uncompletedText: {
        color: "#353839"
      },
      column: {
        flexDirection: "row",
        alignItems: "center",
        width: width / 2
      },
      actions: {
        flexDirection: "row"
      },
      actionContainer: {
        marginVertical: 10,
        marginHorizontal: 10
      },
      input: {
        width: width / 2,
        marginVertical: 15,
        paddingBottom: 5
      }

});