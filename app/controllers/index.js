module.exports.home = function (req, res, next) {
    res.render('home',
        {
            title: 'Welcome to my home page',
            Mission: 'Mission: To achieve accounting excellence'
        }
    );
}

module.exports.about = function (req, res, next) {
    res.render('aboutme',
        {
            title: 'About Man Fai Kwan',
            selfdec: 'Hello, my first name is Man Fai and you may call me Keith, i come from Hong Kong, below is my CV:)'
        }
    );
}

module.exports.project = function (req, res, next) {
    res.render('projects',
        {
            title: 'Projects Page',
            projName1: 'Multiplication Table',
            desc1: 'I am the producer of this multiplication table, it can show the mutiplication results',
            projName2: 'Interactive slide show',
            desc2: 'I am the producer of this interactive slide show page using javascript',
            projName3: 'Hive hunt',
            desc3: 'I am the producer of this web game, you can gain score when you can the lovely hornet'
        }
    );
}

module.exports.service = function (req, res, next) {
    res.render('services',
        {
            title: 'Services Page',
            service1: 'Web development',
            service2: 'C Programming',
            service3: 'Project Management',
            service4: 'Financial Reporting',
            service5: 'Audit & Assurance',
            service6: 'FP&A'
        }
    );
}

module.exports.contact = function (req, res, next) {
    res.render('contacts',
        {
            title: 'Contact Page',
            phone: 'Web development',
            email: 'mail me'
        }
    );
}