import Header from "../../UI/Header";
import PageContainer from "../../UI/PageContainer";

function HowToPlay() {
  return (
    <PageContainer>
      <Header>How to Play</Header>
      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:gap-8">
        <div className="bg-neutral-0 flex flex-col gap-4 rounded-[20px] p-8 px-10 md:flex-row md:items-center md:gap-10 md:rounded-[40px] lg:flex-col lg:px-12 lg:py-15 [@media(min-height:0px)_and_(max-height:673px)]:py-6">
          <p className="text-preset-4 hidden text-blue-600 md:block">01</p>
          <div className="flex items-center gap-4 md:flex-col md:items-start lg:items-center lg:gap-10 lg:text-center">
            <p className="text-preset-10 text-blue-600 md:hidden">01</p>
            <p className="text-preset-10 text-indigo-600 uppercase md:text-[40px] md:tracking-[1.75px] lg:text-[33px] xl:text-[46.5px] xl:tracking-[2.5px]">
              choose a category
            </p>
            <p className="text-preset-11 hidden text-indigo-400 md:block">
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </p>
          </div>

          <p className="text-preset-12 text-indigo-400 md:hidden">
            First, choose a word category, like animals or movies. The computer
            then randomly selects a secret word from that topic and shows you
            blanks for each letter of the word.
          </p>
        </div>
        <div className="bg-neutral-0 flex flex-col gap-4 rounded-[20px] p-8 px-10 md:flex-row md:items-center md:gap-10 md:rounded-[40px] lg:flex-col lg:px-12 lg:py-15 [@media(min-height:0px)_and_(max-height:673px)]:py-6">
          <p className="text-preset-4 hidden text-blue-600 md:block">02</p>
          <div className="flex items-center gap-4 md:flex-col md:items-start lg:items-center lg:gap-10 lg:text-center">
            <p className="text-preset-10 text-blue-600 md:hidden">02</p>
            <p className="text-preset-10 text-indigo-600 uppercase md:text-[40px] md:tracking-[1.75px] lg:text-[33px] xl:text-[46.5px] xl:tracking-[2.5px]">
              guess letters
            </p>
            <p className="text-preset-11 hidden text-indigo-400 md:block">
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it’s wrong, you lose
              some health, which empties after eight incorrect guesses.
            </p>
          </div>

          <p className="text-preset-12 text-indigo-400 md:hidden">
            Take turns guessing letters. The computer fills in the relevant
            blank spaces if your guess is correct. If it’s wrong, you lose some
            health, which empties after eight incorrect guesses.
          </p>
        </div>
        <div className="bg-neutral-0 flex flex-col gap-4 rounded-[20px] p-8 px-10 md:flex-row md:items-center md:gap-10 md:rounded-[40px] lg:flex-col lg:px-12 lg:py-15 [@media(min-height:0px)_and_(max-height:673px)]:py-6">
          <p className="text-preset-4 hidden text-blue-600 md:block">03</p>
          <div className="flex items-center gap-4 md:flex-col md:items-start lg:items-center lg:gap-10 lg:text-center">
            <p className="text-preset-10 text-blue-600 md:hidden">03</p>
            <p className="text-preset-10 text-indigo-600 uppercase md:text-[40px] md:tracking-[1.75px] lg:text-[33px] xl:text-[46.5px] xl:tracking-[2.5px]">
              win or lose
            </p>
            <p className="text-preset-11 hidden text-indigo-400 md:block">
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </p>
          </div>

          <p className="text-preset-12 text-indigo-400 md:hidden">
            You win by guessing all the letters in the word before your health
            runs out. If the health bar empties before you guess the word, you
            lose.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}

export default HowToPlay;
