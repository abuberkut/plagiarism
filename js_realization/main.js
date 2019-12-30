 let operators = ["amalg", "ast", "bigcirc", "bigtriangledown", "bigtriangleup", "bullet", "cap", "cdot", "circ", "cup", "dagger", "ddagger", "diamond", "div", "lhd", "mp", "odot", "ominus", "oplus", "oslash", "otimes", "pm", "rhd", "setminus", "sqcap", "sqcup", "star", "times", "triangleleft", "triangleright", "unlhd", "unrhd", "uplus", "vee", "wedge", "wr", "barwedge", "boxdot", "boxminus", "boxplus", "boxtimes", "Cap", "doublecap", "centerdot", "circledast", "circledcirc", "circleddash", "Cup", "doublecup", "curlyvee", "curlywedge", "divideontimes", "dotplus", "doublebarwedge", "intercal", "leftthreetimes", "ltimes", "rightthreetimes", "rtimes", "smallsetminus", "veebar", "And", "approx", "asymp", "bowtie", "cong", "dashv", "doteq", "equiv", "frown", "geq", "ge", "gg", "in", "Join", "leq", "le", "ll", "mid", "models", "neq", "ne", "ni", "owns", "parallel", "perp", "prec", "preceq", "propto", "sim", "simeq", "smile", "sqsubset", "sqsubseteq", "sqsupset", "sqsupseteq", "subset", "subseteq", "succ", "succeq", "supset", "supseteq", "vdash", "notin", "approxeq", "backepsilon", "backsim", "backsimeq", "because", "between", "blacktriangleleft", "blacktriangleright", "Bumpeq", "bumpeq", "circeq", "curlyeqprec", "curlyeqsucc", "doteqdot", "Doteq", "eqcirc", "eqslantgtr", "eqslantless", "fallingdotseq", "geqq", "geqslant", "ggg", "gggtr", "gtrapprox", "gtrdot", "gtreqless", "gtreqqless", "gtrless", "gtrsim", "leqq", "leqslant", "lessapprox", "lessdot", "lesseqgtr", "lesseqqgtr", "lessgtr", "lesssim", "lll", "llless", "pitchfork", "precapprox", "preccurlyeq", "precsim", "risingdotseq", "shortmid", "shortparallel", "smallfrown", "smallsmile", "sqsubset", "sqsupset", "Subset", "subseteqq", "succapprox", "succcurlyeq", "succsim", "Supset", "supseteqq", "therefore", "thickapprox", "thicksim", "trianglelefteq", "triangleq", "trianglerighteq", "varpropto", "vartriangleleft", "vartriangleright", "Vdash", "vDash", "Vvdash", "nless", "lneq", "nleq", "nleqslant", "lneqq", "lvertneqq", "nleqq", "lnsim", "lnapprox", "nprec", "npreceq", "precneqq", "precnsim", "precnapprox", "subsetneq", "varsubsetneq", "nsubseteq", "subsetneqq", "ngtr", "gneq", "ngeq", "ngeqslant", "gneqq", "gvertneqq", "ngeqq", "gnsim", "gnapprox", "nsucc", "nsucceq", "succneqq", "succnsim", "succnapprox", "supsetneq", "varsupsetneq", "nsupseteq", "supsetneqq", "varsubsetneqq", "varsupsetneqq", "nsubseteqq", "nsupseteqq", "nmid", "nparallel", "nshortmid", "nshortparallel", "nsim", "ncong", "nvdash", "nvDash", "nVdash", "nVDash", "ntriangleleft", "ntriangleright", "ntrianglelefteq", "ntrianglerighteq", "alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "vartheta", "iota", "kappa", "lambda", "mu", "nu", "xi", "pi", "varpi", "rho", "varrho", "sigma", "varsigma", "tau", "upsilon", "phi", "varphi", "chi", "psi", "omega", "Gamma", "Delta", "Theta", "Lambda", "Xi", "Pi", "Sigma", "Upsilon", "Phi", "Psi", "Omega", "varGamma", "varDelta", "varTheta", "varLambda", "digamma", "varXi", "varPi", "varSigma", "varUpsilon", "varkappa", "varPhi", "varPsi", "varOmega", "alphaup", "betaup", "gammaup", "deltaup", "epsilonup", "varepsilonup", "zetaup", "etaup", "thetaup", "varthetaup", "iotaup", "kappaup", "lambdaup", "muup", "nuup", "xiup", "piup", "varpiup", "rhoup", "varrhoup", "sigmaup", "varsigmaup", "tauup", "upsilonup", "phiup", "varphiup", "chiup", "psiup", "omegaup", "cdotp", "colon", "ldotp", "acute", "bar", "breve", "check", "dot", "ddot", "grave", "hat", "tilde", "vec", "dddot", "ddddot", "sqrt", "quad", "qquad", "mathstruct", "leftroot", "uproot", "frac", "displaystyle", "cfrac", "dfrac", "log", "tfrac", "bigcap", "bigcup", "bigdot", "bigoplus", "bigotimes", "bigsqcup", "biguplus", "bigvee", "bigwedge", "coprod", "int", "oint", "prod", "sum", "limits", "infty", "iint", "iiint", "iiiint", "idotsint", "vec", "varointclockwise", "fint", "substrack", "in", "sideset", "methop", "lbrack", "lbrace", "lfloor", "langle", "vert", "rbrack", "rfloor", "rangle", "lvert", "lVert", "uparrow", "downarrow", "updownarrow", "lceil", "Uparrow", "Downarrow", "Updownarrow", "rceil", "backslash", "rvert", "rVert", "lgroup", "arrowvert", "rgroup", "Arrowvert", "lmoustache", "bracevert", "rmoustache", "ulcorner", "urcorner", "llcorner", "lrcorner","limits", "mathrm", "right", "bigl", "Bigl", "biggl", "Biggl", "bigr", "Bigr", "biggr", "Biggr", "bigm", "Bigm", "biggm", "Biggm", "big", "Big", "bigg", "Bigg","left", "zeta", "qquad", "leftarrow", "gets", "rightarrow", "leftrightarrow", "Leftarrow", "Rightarrow", "Leftrightarrow", "mapsto", "hookleftarrow", "leftharpoonup", "leftharpoondown", "rightleftharpoons", "longleftarrow", "longrightarrow", "longleftrightarrow", "Longleftarrow", "Longrightarrow", "Longleftrightarrow", "longmapsto", "hookrightarrow", "rightharpoonup", "rightharpoondown", "iff", "uparrow", "downarrow", "updownarrow", "Uparrow", "Downarrow", "Updownarrow", "nearrow", "searrow", "swarrow", "nwarrow", "leadsto", "dashleftarrow", "dashrightarrow", "leftleftarrows", "rightrightarrows", "leftrightarrows", "rightleftarrows", "multimap", "upuparrows", "downdownarrows", "Lleftarrow", "Rrightarrow", "upharpoonleft", "twoheadleftarrow", "twoheadrightarrow", "upharpoonright", "leftarrowtail", "rightarrowtail", "downharpoonleft", "leftrightharpoons", "rightleftharpoons", "downharpoonright", "Lsh", "Rsh", "rightsquigarrow", "looparrowleft", "looparrowright", "leftrightsquigarrow", "curvearrowleft", "curvearrowright", "circlearrowleft", "circlearrowright","nleftarrow", "nrightarrow", "nleftrightarrow", "nLeftarrow", "nRightarrow", "nLeftrightarrow", "aleph", "angle", "bot", "Box", "clubsuit", "Diamond", "diamondsuit", "ell", "emptyset", "exists", "flat", "forall", "hbar", "heartsuit", "Im", "imath", "infty", "jmath", "mho", "nabla", "natural", "neg", "lnot", "partial", "prime", "Re", "sharp", "spadesuit", "surd", "top", "triangle", "wp", "copyright", "dag", "ddag", "P", "pounds", "S", "checkmark", "circledR", "maltese","angle", "backprime", "Bbbk", "bigstar", "blacklozenge", "blacksquare", "blacktriangle", "blacktriangledown", "circledS", "complement", "diagdown", "diagup", "eth", "Finv", "Game", "hbar", "hslash", "lozenge", "measureangle", "mho", "nexists", "sphericalangle", "square", "triangledown", "varnothing", "vartriangle", "beth", "daleth", "gimel","widetilde", "widehat", "hat", "underline", "overline", "strut", "overbrace", "underbrace", "overleftarrow", "overrightarrow", "stackrel", "mathrm", "overset", "underset", "xleftarrow", "times", "xrightarrow", "binom", "tbinom", "dbinom", "arccos", "cos", "csc", "hom", "log", "tan", "arcsin", "cosh", "deg", "ker", "sec", "tanh", "arctan", "cot", "dim", "lg", "sin", "arg", "coth", "exp", "ln", "sinh", "arctg", "ch", "ctg", "sh", "th", "arcctg", "cosec", "cth", "tg", "Prob", "nod", "nok", "Proj", "Variance", "NOD", "NOK", "le", "max", "log", "limsup", "lim", "det", "sup", "liminf", "inf", "min", "gcd", "Pr", "varlimitf", "varlimsup", "projlim", "varinjlim", "varprojlim", "esssup","bmod", "equiv", "pmod", "mod", "pod", "mathcal", "vline", "to", "begin", "end", "multicolumn", "bordermatrix", "Vmatrix", "hdotsfor", "genfraclangle", "rangle", "varphi", "textrm", "text", "geq", "textsf", "mathbf", "mbox", "mathrm", "intertext", "thickspace", "medspace", "thinspace", "negthinspace", "negmedspace", "negthickspace","mkern", "mspace", "nobreakdash", "hspace", "phantom", "hphantom", "vphantom", "lefteqn", "backslash", "smash", "newtheorem", "ref", "otimes", "boxed", "subseteq", "addtocounter", "normilize", "theequation", "displaystyle", "raisebox", "ang"];

operators = operators.sort((x,y)=>x.toLowerCase().localeCompare(y.toLowerCase())).sort(function(x,y){return x.length-y.length});
//---------------------------------
//-----------------------------------
function numFinder(str){
    let numEl = operators.indexOf(operators.find(x=>x==str));
    if(numEl>=0) return "el"+numEl;
    else return "";
}
//-----------------------------------
function opCatcher(arr){
    let operator=[],newArr=[],elNum;
    for(let i=0; i<=arr.length-1; ++i){
        if(arr[i]=="\\"){
            while(true){
                i++;
                if(arr[i]==" "||arr[i]=="_"||i==arr.length)
                    break;
                operator.push(arr[i]);
            }
            console.log("operator = ",operator);
            let str = operator.toString().replace(/,/g,"");
            elNum = numFinder(str);
            console.log("operator string = ",str+"x");
            newArr.push(elNum);
            operator = [];
        }else{
            if(arr[i]!=" ")
            newArr.push(arr[i]);
        } 
    }
    return newArr;
}
//-----------------------------------
function plagiarism(a,b){
    let maxLength = Math.max(a.length,b.length),
        sameCh=0;
    for(let i=0;i<=b.length-1;i++){
        if(a[i]==b[i])sameCh++;
    }
    return sameCh/maxLength;
}
//------------------------------------------------------------
const doc = document,
    expOne = doc.getElementById('expOne'),
    expTwo = doc.getElementById('expTwo'),
    transformBtn = doc.getElementById('trBtn'),
    UIexpOne = doc.getElementById('firstExp'),
    UIexpTwo = doc.getElementById('secondExp'),
    UIplagPer = doc.getElementById('plagPer');
//------------------------------------------------------------
transformBtn.addEventListener('click',transformExp);
//------------------------------------------------------------
function transformExp(e){
    let arrExpOne = Array.from(expOne.value),
        arrExpTwo = Array.from(expTwo.value),
        tranfExpOne=[],
        tranfExpTwo=[];
    tranfExpOne = opCatcher(arrExpOne);
    tranfExpTwo = opCatcher(arrExpTwo);
    
    let x = plagiarism(tranfExpOne,tranfExpTwo);
    UIexpOne.textContent="";
    UIexpTwo.textContent="";
    UIplagPer.textContent="";
    UIexpOne.append(tranfExpOne);
    UIexpTwo.append(tranfExpTwo);
    UIplagPer.append(x*100+"%");
    if(expOne.value!=='')transformBtn.value = 'Clear';
    else transformBtn.value = 'Transform';
    expOne.value = '';
    expTwo.value = '';
}