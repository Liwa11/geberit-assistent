import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

import config from '../client-configs/geberit';
import OpenAI from 'openai';
import { Ionicons } from '@expo/vector-icons';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function App() {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages = [...messages, { role: 'user', content: input }] as Message[];
    setMessages(updatedMessages);
    setInput('');

    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'system', content: config.systemPrompt },
            ...updatedMessages,
          ] as Message[],
      });

      const aiResponse = completion.choices[0].message?.content ?? 'Geen antwoord ontvangen.';
      setMessages([...updatedMessages, { role: 'assistant', content: aiResponse }]);
    } catch (err) {
      console.error('Fout bij AI:', err);
      setMessages([
        ...updatedMessages,
        {
          role: 'assistant',
          content: 'Er ging iets mis bij het ophalen van het antwoord.',
        },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={60}
      >
        <Image source={config.logo} style={styles.logo} />
        <Text style={styles.title}>{config.name}</Text>

        <ScrollView
          style={styles.chatBox}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.map((msg, index) => (
            <Text
              key={index}
              style={{
                marginVertical: 4,
                color: msg.role === 'user' ? '#000' : '#333',
              }}
            >
              <Text style={{ fontWeight: msg.role === 'user' ? 'bold' : 'normal' }}>
                {msg.role === 'user' ? 'Jij: ' : 'AI: '}
              </Text>
              {msg.content}
            </Text>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Typ je vraag..."
            value={input}
            onChangeText={setInput}
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f2f5',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#000',
  },
  chatBox: {
    flex: 1,
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    color: '#000',
  },
  sendButton: {
    backgroundColor: config.primaryColor,
    padding: 10,
    borderRadius: 20,
    marginLeft: 5,
  },
});