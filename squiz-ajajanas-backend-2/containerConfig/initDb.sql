-- DROP TABLE correct_answer;
-- CREATE TABLE correct_answer
-- (
--     correct_answer_id SERIAL UNIQUE,
--     correct_answer VARCHAR(90)
-- );

INSERT INTO public.correct_answer(correct_answer_id, correct_answer)
VALUES ('1', 'puerto potato');

INSERT INTO public.category(category_id, category_name)
VALUES ('2', 'geography');

INSERT INTO public.question(question_id, question, correct_answer, category_id)
VALUES ('3', 'where is banana?', '1', '2');

INSERT INTO public.wrong_answer(answer_id, answer, question_id) VALUES ('1', 'nowhere', '3');
INSERT INTO public.wrong_answer(answer_id, answer, question_id) VALUES ('2', 'Sweden', '3');
INSERT INTO public.wrong_answer(answer_id, answer, question_id) VALUES ('3', 'Atlantic Ocean', '3');
