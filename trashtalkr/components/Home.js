
import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { Card } from "react-native-material-design";

class Home extends React.Component {
  constructor() {
    super();
  }


    render () {
        return (
          <View style={styles.container}>
            {
              this.props.articles.map( (article) => {
                let img = article.urlToImage
                return (
                  <Card key={article.url} style={styles.article}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{article.title}</Text>
                    <Image style={{width: 200, height: 150, margin: 20}} source={{uri: img}}/>
                    <Text>{article.description}</Text>
                  </Card>
                )
              })
            }
          </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    width: '90%',
    margin: 0,
  },
  article: {
    justifyContent: 'center',
    'alignItems': 'center',
    padding: 10
  }
});

export default Home;
