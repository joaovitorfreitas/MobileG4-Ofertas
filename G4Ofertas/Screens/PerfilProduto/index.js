<SafeAreaView style={styles.container}>
<View>
<View>
          <Image
            source={require("../../assets/Banana.png")}
          />
        </View>
    <View> 
        <Text>Nome Produto</Text>
    </View>

  <View>
  <Text>R$:2,50 </Text>

  <Text>Quantidade </Text>

  <Text>1 </Text>
  <StatusBar style="auto" hidden={true}/>
           

    <TouchableOpacity
      onPress={() => navigation.navigate("UserRegister")}
    > 
    <Text>Reservar</Text>
    </TouchableOpacity>  

    </View>
    </View>
</SafeAreaView>
