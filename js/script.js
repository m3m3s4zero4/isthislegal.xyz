$(document).ready(function () {
    $("#title").focus();
    autosize($("#text"));

    const aboutMessage = [
        "Once upon a time the crypto world was a peaceful utopia,coins were traded,tokens were created and everything was pretty damn smooth but then out of nowhere,a bunch of shady characters appeared like cockroaches in the kitchen at 2 AM. They came with their \"innovative\" strategies creating fake coins, making money out of thin air, and wrecking the whole damn crypto ecosystem.",
        "And then, it happened guys…",
        "Rug pulls…everywhere!!!",
        "Now it’s time for I$THI$LEG@L coin community to rise from the ashes exposing the dirty truth behind every rug pull, scam, and shady crypto project that’s been plaguing crypto for decades. We’re not here to just join the circus we’re here to flip the tent, expose the clowns and let the whole world know that crypto can and should be better.",
        "Exposing the Rug Pulls",
        "[Political Rug Pulls]",
        "Politicians,their families and their cronies are sitting pretty while they siphon off retail liquidity like it’s their own personal piggy bank.And what regulators do? Absolutely nothing! In fact,they might be sipping cocktails with the scammers.Cheers, right?",
        "[Billionaire & Millionaire Rug Pulls]",
        "These rich folks don't just sit back and let their wealth grow! Oh no,they actively hype up the coins they like.It’s like they’re running a personal fan club,but instead of boosting your morale,they're boosting their own pockets.The moment they throw out a tweet or an Instagram post about how amazing some coin is,guess what? The price skyrockets! Retail investors pour in,thinking they're getting in on the next big thing.",
        "Then,just when it looks like everything's going to the moon, BAM,they pull out, cashing in on the gains.All those poor souls who bought the hype? Left holding bags of worthless tokens.These billionaires are like the best salespeople.They get everyone excited,sell out and laugh their way to the bank.It’s like they’re running a crypto version of Buy low, hype it high,sell high and leave the rest of you to deal with the mess!",
        "[Venture Capital Rug Pulls]",
        "VCs claim they’re supporting innovation,but in reality they’re just trying to grab as much profit as possible and if the project fails,well...tough luck.They jump on the hype,take the biggest chunk and leave you to clean up the mess.And guess what? They always get their golden parachute while you're stuck with an empty wallet.Rugged, buddy.",
        "[Whale Rug Pulls]",
        "Whales love to manipulate the crypto market like they're playing chess with pennies.They pump up the prices get everyone excited and when the ship is sailing smoothly,they bail,pulling the rug out from under everyone.It’s like watching the Titanic hit an iceberg and the whales are the ones with the lifeboats.",
        "[Scammy Developer Rug Pulls]",
        "Hey,remember that shiny new coin you bought because some random developer tweeted about it? Well,guess what? They launched it, hyped it and when it was time to deliver they vanished like Houdini.Poof,Good luck getting any response on the Telegram group.It's not magic...it's a rug pull.",
        "[Big Influencer Rug Pulls]",
        "They say,“Hey, buy this coin! It’s gonna moon!”They tweet it out to their millions of followers the hype goes crazy and once the price rises?They cash out and you get wrecked.These influencers may as well have get rich quick written on their profile.It’s not about helping you,it’s about pocketing the gains.",
        "[Celebrity Rug Pulls]",
        "From athletes to actors,celebrities are jumping on the crypto bandwagon like it’s the new hottest trend.They promote their coins get paid in stacks of cash...and then pull out before you even realize what happened.Do they care? Nope.They’re busy with their endorsement deals.You? You're holding the bag.Classic celebrity rug pull.",
        "[Scammer Rug Pulls]",
        "Let’s not forget the real scumbags here.From phishing to fake ICOs,scammers have been lurking around every corner of the crypto world.They dangle fake promises in front of you get your funds and disappear faster than a Snapchat message.Click and gone.",
        "Where the Hell Are the Regulators?",
        "Here’s the kicker,Regulators? Silence Crickets,They’re too busy with their other priorities while retail investors get wrecked,Where’s the law? Oh,it’s somewhere,chilling letting you burn.So,if you thought the regulators were your safety net.,think again.",
        "i$thi$leg@l — A coin with a Purpose !!!",
        "Unlike the empty promises from politicians, public figures, celebrities, influencers, venture capitalists, whales, scammers, developers, and manipulators, i$thi$leg@l coin actually has a purpose.It's not about hype or quick profits.It's about creating real change and exposing the toxic structures that have exploited the public for decades.",
        "Here’s what makes i$thi$leg@l coin different:",
        "1.Transparency is a key,every move we make is for the people.No hidden fees,No rug pulls just open and honest tokenomics.",
        "2.i$thi$leg@l coin will leverage innovative tech to protect investors from scams.",
        "3.This coin is more than just a meme,it's a way to expose the truth we’re not just throwing coins into the wild hoping for a pump,we’re creating a coin that fights back against the systemic abuses that have plagued both the political world, financial system, and the crypto space.",
        "4.This is a coin for the people,We're not here to create the next billionaire! we're here to educate you and raise awareness while also calling out those who've been scamming the crypto world for years.",
        "5.Transparency in the chaos,we will openly show you how scams work,No mystery,No shame,Just raw unfiltered truth! We’re using this platform to create awareness and shine a light on the dark corners of crypto that no one wants to talk about.",
        "6.AI-powered fraud detection while others are busy buying the dip,we’re using AI to detect patterns of fraud, manipulation, and pump-and-dump schemes before they even happen.Think of it like a watchdog on steroids.It analyzes market data in real time,catching the sneaky behavior of scammers and making it harder for them to profit off of the unsuspecting public.",
        "7.Working with regulators for real change,We’re not just making memes we’re talking to actual regulatory agencies who want to create a safer crypto space for everyone.We're working to help them identify scams track down bad actors and hold them accountable,Regulators might be quiet right now,but we’re here to make some noise.",
        "8.Anonymous Reporting Platform,Have you spotted a rug pull in the making or know about an insider scam?We’ve got you covered,Our platform allows anyone to report fraud,manipulation or shady projects anonymously,We'll ensure that those who step forward are protected from retaliation because,let’s face it the people doing the scamming don’t want the truth to get out,No one said whistleblowing was easy,which is why we’ll reward whistleblowers with I$THI$LEG@L Coin,You’ll be helping the crypto community and you’ll get a little something for your bravery a token for your truth-telling.After all who doesn’t want to expose the bad guys and make some coin at the same time?",
        "9.AI verification of claim,We’re not just going to take anyone's word for it.AI will help verify claims made by whistleblowers,ensuring that only legitimate information gets through.We’ll use the power of artificial intelligence to analyze patterns of fraud,identify fake projects and flag potential scams before they spiral out of control.",
        "10.More to come,it's just the beginning !!!",
    ];

    const missionMessage = [
        "Tired of the rug pulls ?",
        "Sick of the lies and empty promises ?",
        "Our mission is clear to expose the truth behind every rug pull, every scam and every manipulation that’s been plaguing the crypto world for years.",
        "We’re not here to play the games.",
        "We’re here to end them.",
        "We want to make crypto a safer place for everyone.",
        "Join i$thi$leg@l revolution now."
    ];

    let typingInProgress = false; 

    $("#about-link").click(function (event) {
        event.preventDefault();
        if (!typingInProgress) { 
            typingInProgress = true; 
            startTyping(aboutMessage);
        }
    });

    $("#mission-link").click(function (event) {
        event.preventDefault();
        if (!typingInProgress) { 
            typingInProgress = true; 
            startTyping(missionMessage);
        }
    });

    $("#contact-link").click(function (event) {
        event.preventDefault();
        showSocialIconsWithCountdown(30); 
    });

    $("#toggle-sidebar").click(function() {
        $("#sidebar").toggleClass("open");

        if ($("#sidebar").hasClass("open")) {
          $("nav.site ul li").fadeOut();
        } else {
          $("nav.site ul li").show();
        }
    });

    function startTyping(messages) {
        const typingElement = $("#typing");
        typingElement.html(''); 
        let index = 0;
        let paragraphIndex = 0;

        function type() {
            if (paragraphIndex < messages.length) {
                if (index < messages[paragraphIndex].length) {
                    typingElement.append(messages[paragraphIndex].charAt(index));
                    index++;
                    setTimeout(type, 30); 
                } else {
                    typingElement.append('<br><br>');
                    index = 0;
                    paragraphIndex++;
                    setTimeout(type, 500);
                }
            } else {
                typingInProgress = false; 
                startCountdown(30); 
            }
        }

        type();
    }

    function startCountdown(duration) {
        const typingElement = $("#typing");
        const countdownElement = $('<p id="countdown" class="countdown"></p>');
        typingElement.append(countdownElement);
        let timer = duration, minutes, seconds;

        const countdownInterval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            countdownElement.text(`Disappearing in: ${minutes}:${seconds}`);

            if (--timer < 0) {
                clearInterval(countdownInterval);
                typingElement.html('');
            }
        }, 1000);
    }

    function showSocialIconsWithCountdown(duration) {
        const socialIcons = $("#social-icons");
        const countdownElement = $("#social-countdown");
        socialIcons.fadeIn(300); 
        let timer = duration, minutes, seconds;

        const countdownInterval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            countdownElement.text(`Icons will disappear in: ${minutes}:${seconds}`);

            if (--timer < 0) {
                clearInterval(countdownInterval);
                socialIcons.fadeOut(300); 
            }
        }, 1000);
    }

    function showMissionWithCountdown() {
        const missionContainer = $("<div style='color: white;'></div>");
        $("#typing").after(missionContainer);
        missionContainer.html('');
        let index = 0;
        let paragraphIndex = 0;

        function type() {
            if (paragraphIndex < missionMessage.length) {
                if (index < missionMessage[paragraphIndex].length) {
                    missionContainer.append(missionMessage[paragraphIndex].charAt(index));
                    index++;
                    setTimeout(type, 50); 
                } else {
                    missionContainer.append('<br><br>');
                    index = 0;
                    paragraphIndex++;
                    setTimeout(type, 500);
                }
            } else {
                startCountdownForMission(30); 
            }
        }

        function startCountdownForMission(duration) {
            const countdownElement = $('<p id="mission-countdown" class="countdown" style="color: red; font-weight: bold;"></p>');
            missionContainer.append(countdownElement);
            let timer = duration, minutes, seconds;

            const countdownInterval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                countdownElement.text(`Disappearing in: ${minutes}:${seconds}`);

                if (--timer < 0) {
                    clearInterval(countdownInterval);
                    missionContainer.html('');
                }
            }, 1000);
        }

        type();
    }
});





























































































































