import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Footer, Button, Title, Container, Content } from 'native-base';
import { Header } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
  useSafeAreaInsets,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

const Category = () => {
  const categoryClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
    <TouchableOpacity
      onPress={categoryClickedHandler}
      style={styles.categoryButton}>
      <Text>Item</Text>
      <Text>$0</Text>
    </TouchableOpacity>
  );
}

const MainButton = () => {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
    <View title="ExpensesCenterText" style={styles.centered}>
        <TouchableOpacity
          onPress={buttonClickedHandler}
          style={styles.totalExpensesButton}>
          <Text style={styles.totalExpensesText}>Expenses</Text>
          <Text style={styles.totalIncomeValue}>$750&#9650;</Text>
          <Text style={styles.totalExpenseValue}>$600&#9660;</Text>
        </TouchableOpacity>
    </View>
  );
}

function App() {
  const buttonClickedHandler = () => {
    console.log('You have been clicked a button!');
    // do something
  };

  return (
<SafeAreaProvider>
  <Container>
      <SafeAreaView>
      <Header
        leftComponent=<Ionicons name="menu" size={32} color="white" />
        centerComponent={{ text: 'Big Money', style: { color: '#fff', fontSize: 20, fontWeight: 700 } }}
      />
      </SafeAreaView>
  
      <Content style={styles.centered}>

        <View style={styles.categoryButtonContainer}>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
        </View>

        <View>
          <MainButton/>
        </View>
        
        <View style={styles.categoryButtonContainer}>
          <Category/>
          <Category/>
          <Category/>
          <Category/>
        </View>

      </Content>

      <Footer>
        <Button transparent>
            <Ionicons name="home" size={32} color="white" />
        </Button>
      </Footer>
      
    </Container>
    </SafeAreaProvider>
  );
}

export default App;

/// Just some styles
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  categoryButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 100,
    borderWidth: 6,
    borderColor: '#d4defa',
    backgroundColor: '#e1e8fc'
  },
  totalExpensesButton: {
    margin: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 7,
    borderColor: '#03a5fc'
  },
  totalExpensesText: {
    fontSize: 16,
    fontWeight: 600,
    padding: 5
  },
  totalExpenseValue: {
    fontSize: 14,
    fontWeight: 600,
    color: '#e80707',
    padding: 1
  },
  totalIncomeValue: {
    fontSize: 14,
    fontWeight: 600,
    color: '#41b812',
    padding: 1
  }
});