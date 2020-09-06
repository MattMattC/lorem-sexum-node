import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Box,
    Text,
    Checkbox,
    Radio,
    RadioGroup,
    useClipboard,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
    generateFromNbWords,
    generateByParagraphNumber,
} from '@lorem-sexum/node';

function Generator() {
    const { register, handleSubmit, watch, errors } = useForm();
    const [generatorType, setGeneratorType] = React.useState('words');
    const [result, setResult] = useState('');
    const { onCopy, hasCopied } = useClipboard(
        Array.isArray(result) ? result.join('') : result
    );
    const beginSentence = 'Lorem sexum dolor sit amet';

    const onSubmit = (data) => {
        let objects;
        switch (generatorType) {
            case 'words':
                objects = generateFromNbWords(
                    data.nbWords,
                    data.beginSentence ? beginSentence : null,
                    data.ipsumMode
                );
                break;
            // TODO : faire la distinction entre paragraph et vraies phrases
            case 'paragraphs':
                objects = generateByParagraphNumber(data.nbParagraph);
                break;
        }
        setResult(objects);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RadioGroup
                    onChange={(e) => setGeneratorType(e.target.value)}
                    value={generatorType}
                >
                    <Radio value="words">Words</Radio>
                    <Radio value="paragraphs">Paragraphs</Radio>
                </RadioGroup>
                {generatorType === 'words' ? (
                    <>
                        <FormControl isRequired>
                            <FormLabel htmlFor="nbWords">
                                Number of words
                            </FormLabel>
                            <Input
                                ref={register}
                                name="nbWords"
                                id="nbWords"
                                type="number"
                                defaultValue="24"
                                placeholder="Number of words"
                                ref={register({ min: 1, max: 2000 })}
                            />
                            {errors.nbWords && (
                                <span>This field is required</span>
                            )}
                        </FormControl>
                        <FormControl>
                            <Checkbox
                                ref={register}
                                name="beginSentence"
                            >
                                Begin with the sentence "{beginSentence}"
                            </Checkbox>
                        </FormControl>
                        <FormControl>
                            <Checkbox
                                ref={register}
                                name="ipsumMode"
                                defaultIsChecked
                            >
                                Ipsum Mode
                            </Checkbox>
                        </FormControl>
                    </>
                ) : null}
                {generatorType === 'paragraphs' ? (
                    <FormControl isRequired>
                        <FormLabel htmlFor="nbParagraph">
                            Number of Paragrah
                        </FormLabel>
                        <Input
                            ref={register}
                            name="nbParagraph"
                            id="nbParagraph"
                            type="number"
                            defaultValue="3"
                            placeholder="Number of paragraph"
                            ref={register({ min: 1, max: 99 })}
                        />
                        {errors.nbWords && <span>This field is required</span>}
                    </FormControl>
                ) : null}

                <Button type="submit" mt={4} variantColor="teal" type="submit">
                    Generate pleasure 💦
                </Button>
                {result ? (
                    <Button onClick={onCopy} mt={4}>
                        {hasCopied ? 'Copied' : 'Copy'}
                    </Button>
                ) : null}
            </form>
            {result ? (
                <Box mt="4" p="4" borderWidth="1px" rounded="lg">
                    {Array.isArray(result) ? (
                        result.map((paragraph, index) => {
                            return (
                                <Text mb="2" as="p" key={index}>
                                    {paragraph}
                                </Text>
                            );
                        })
                    ) : (
                        <Text>{result}</Text>
                    )}
                </Box>
            ) : null}
        </div>
    );
}

Generator.propTypes = {};

export default Generator;
