import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const CustomComponent = () => {
  const [selectedDropdown, setSelectedDropdown] = useState('Select');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [textSize, setTextSize] = useState('');
  const [padding, setPadding] = useState('');
  const [textColor, setTextColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [cornerRadius, setCornerRadius] = useState('');
  const [tooltipWidth, setTooltipWidth] = useState('');
  const [arrowWidth, setArrowWidth] = useState('');
  const [arrowHeight, setArrowHeight] = useState('');

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
            //  <View style={styles.formContainer}></View>
    <View style={{ padding: 20 }}>
      {/* Target Element */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ marginBottom: 5 }}>Target Element</Text>
        <View style={{ borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 5 }}>
          <Text>Select Target:</Text>
          <TouchableOpacity
            onPress={() => {
              // Code to show dropdown options
            }}
            style={{
              backgroundColor: '#007bff',
              padding: 10,
              marginTop: 5,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: 'white' }}>{selectedDropdown}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tooltip */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 5 }}>Tooltip</Text>
        <TextInput
          placeholder="Tooltip Title"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            borderRadius: 5,
          }}
        />
        <TextInput
          placeholder="Tooltip Text"
          multiline
          numberOfLines={3}
          value={textAreaValue}
          onChangeText={setTextAreaValue}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            marginTop: 10,
            borderRadius: 5,
          }}
        />
      </View>

      {/* Text Size and Padding */}
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={{ marginBottom: 5 }}>Text Size</Text>
          <TextInput
            placeholder="Text Size"
            value={textSize}
            onChangeText={setTextSize}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 5 }}>Padding</Text>
          <TextInput
            placeholder="Padding"
            value={padding}
            onChangeText={setPadding}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              borderRadius: 5,
            }}
          />
        </View>
      </View>

      {/* Text Color */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 5 }}>Text Color</Text>
        <TextInput
          placeholder="Text Color"
          value={textColor}
          onChangeText={setTextColor}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            borderRadius: 5,
          }}
        />
      </View>

      {/* Background Color */}
      <View style={{ marginBottom: 20 }}>
        <Text style={{ marginBottom: 5 }}>Background Color</Text>
        <TextInput
          placeholder="Background Color"
          value={backgroundColor}
          onChangeText={setBackgroundColor}
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            padding: 10,
            borderRadius: 5,
          }}
        />
      </View>

      {/* Other Settings */}
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={{ marginBottom: 5 }}>Corner Radius</Text>
          <TextInput
            placeholder="Corner Radius"
            value={cornerRadius}
            onChangeText={setCornerRadius}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={{ marginBottom: 5 }}>Tooltip Width</Text>
          <TextInput
            placeholder="Tooltip Width"
            value={tooltipWidth}
            onChangeText={setTooltipWidth}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 1, marginRight: 10 }}>
          <Text style={{ marginBottom: 5 }}>Arrow Width</Text>
          <TextInput
            placeholder="Arrow Width"
            value={arrowWidth}
            onChangeText={setArrowWidth}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 5 }}>Arrow Height</Text>
          <TextInput
            placeholder="Arrow Height"
            value={arrowHeight}
            onChangeText={setArrowHeight}
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              padding: 10,
              borderRadius: 5,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: 'grey',
      paddingHorizontal: 20,
      paddingVertical: 40,
    },
    // formContainer: {
    //   backgroundColor: 'green',
    //   borderRadius: 10,
    //   padding: 20,
    // },
    // Other styles as needed
  });

export default CustomComponent;
