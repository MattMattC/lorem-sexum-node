import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Box,
    Text,
    Checkbox,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { generateFromNbWords } from '@lorem-sexum/node';

function Generator(props) {
    const { register, handleSubmit, watch, errors } = useForm();
    const [result, setResult] = useState('');
    const beginSentence = 'Lorem sexum dolor sit amet';
    const onSubmit = (data) => {
        const objects = generateFromNbWords(
            data.nbWords,
            data.beginSentence ? beginSentence : null,
            data.ipsumMode
        );
        setResult(objects);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                    <FormLabel htmlFor="nbWords">Number of words</FormLabel>
                    <Input
                        ref={register}
                        name="nbWords"
                        id="nbWords"
                        type="number"
                        defaultValue="24"
                        placeholder="Number of words"
                        ref={register({ min: 1, max: 99 })}
                    />
                    {errors.nbWords && <span>This field is required</span>}
                </FormControl>
                <FormControl>
                    <Checkbox ref={register} name="beginSentence">
                        Begin with the sentence "{beginSentence}"
                    </Checkbox>
                </FormControl>
                <FormControl>
                    <Checkbox ref={register} name="ipsumMode" defaultIsChecked>
                        Ipsum Mode
                    </Checkbox>
                </FormControl>
                <Button type="submit" mt={4} variantColor="teal" type="submit">
                    Generate pleasure 💦
                </Button>
            </form>
            {result ? (
                <Box mt="4" p="4" borderWidth="1px" rounded="lg">
                    <Text>{result}</Text>
                </Box>
            ) : null}
        </div>
    );
}

Generator.propTypes = {};

export default Generator;
