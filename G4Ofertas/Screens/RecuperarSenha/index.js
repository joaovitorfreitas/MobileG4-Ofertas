
 return (
    <SafeAreaView style={styles.container}>
        <View>
            <View> 
                <Text>Recuperar senha:</Text>
            </View>
          <StatusBar style="auto" hidden={true}/>

          <View>
          <Text>Email: </Text>
            <TextInput
            style={styles.input}    
            /> 

          <Text>Enviaremos um email de confirmação para mudarmos sua senha </Text>
            <TextInput
            style={styles.input}    
            />       

            <TouchableOpacity
              onPress={() => navigation.navigate("UserRegister")}
            > 
            <Text>Enviar</Text>
            </TouchableOpacity>  

            </View>
            </View>
    </SafeAreaView>
  );