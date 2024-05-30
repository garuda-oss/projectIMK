var useranswers = new Array();
var answered = 0;
var i = 0;

function renderQuiz() 
{
	for(i;i<10;i++) 
	{	
		if(i===0)
		{
			document.write('<div id ="'+ i +'" style="display: block;">');
		}
		else
		{
			document.write('<div id ="'+ i +'" style="display: none;">');
		}
		var next=i+1;
		var back=i-1;
		var idDiv=0;
		var idExp=0;
		
		document.write('<B>Soal  ' +next+ '</B>');
		document.write('<p class="question">' + questions[i] + ' <span id="result_' + i + '"><img src="blank.gif" style="border:0" alt="" /></span></p>');
		
		document.write('<div class="row">');
		for(j=0;j<choices[i].length;j++) 
    	{
			document.write('<div class="span6">');
      		document.write('<button class="btn btn-medium btn-block" value="' + choices[i][j] + '" type="button" name="question_'+ i +'" onclick="showStuff(\'exp_'+ i +'\'); submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\');" /> <label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '">&nbsp;&nbsp;' + choices[i][j] + '</label> </button><br>');
			document.write('</div>');
		}	
			//backup 17:17
			/*document.write('<div id ="'+ idDiv +'">');
      		document.writeln('<button align="justify" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label>');
			document.write('</div>');*/
			 
    	//}
		document.write('<div class="span6">');
		if(i===0)
		{
			document.writeln('<button class="btn btn-medium btn-success" type="submit" onclick="showStuff(\''+ next +'\'); hideStuff(\''+ i +'\'); return false;">  Next  </button>');

		}
		else if(i===9)
		{
			document.write('<button class="btn btn-medium btn-info" type="submit" onclick="showStuff(\''+ back +'\'); hideStuff(\''+ i +'\'); return false;">  Back  </button> <button class="btn btn-medium btn-warning" type="submit" onclick="showScore();"> Lihat Nilai </button> <button class="btn btn-medium btn-danger" type="submit" onclick="resetQuiz();"> Reset Jawaban </button>');
		}
		else
		{
			document.write('<button class="btn btn-medium btn-info" type="submit" onclick="showStuff(\''+ back +'\'); hideStuff(\''+ i +'\'); return false;"> Back </button> <button class="btn btn-medium btn-success" type="submit" onclick="showStuff(\''+ next +'\'); hideStuff(\''+ i +'\'); return false;"> Next </button>');
		}
		document.write('</div>');
		document.write('</div>');
		document.write('<div id="exp_'+ i +'" style="display:none">');
			document.write('<br><a id="exp_'+ exp[i] +'" class="btn btn-mini btn-inverse" data-content="'+ nexp[i] +'" rel="popover" href="#" data-original-title="Penjelasan"> &nbsp;&nbsp; Lihat penjelasan? &nbsp;</a>');
		document.write('</div>'); 
		document.write('</div>'); 
   
	}
}
/*
function resetQuiz(showConfirm) {
  if(showConfirm)
    if(!confirm("Anda ingin memulai dari awal?"))
      return false;
  document.location = document.location;
}
*/

function resetQuiz() {
bootbox.confirm("Anda ingin mengulang test?", function(result) {
    if (result) {
        document.location = document.location;
    }
});


}

function submitAnswer(questionId, obj, classId, labelId) {
  useranswers[questionId] = obj.value;
  document.getElementById(labelId).style.fontWeight = "bold";
  disableQuestion(classId);
  showResult(questionId);
  answered++;
}

function showResult(questionId) {
  if(answers[questionId] == useranswers[questionId]) {
    document.getElementById('result_' + questionId).innerHTML = '<img src="img/correct.gif" style="border:0" alt="Correct!" />';
  } else {
    document.getElementById('result_' + questionId).innerHTML = '<img src="img/incorrect.gif" style="border:0" alt="Incorrect!" />';
  }
}

function showScore() {
  if(answered != answers.length) {
    alert("Maaf, tolong jawab semua pertanyaan dulu!");
    return false;
  }
  questionCount = answers.length;
  correct = 0;
  incorrect = 0;
  for(i=0;i<questionCount;i++) {
    if(useranswers[i] == answers[i])
      correct++;
    else
      incorrect++;
  }
  pc = Math.round((correct / questionCount) * 100);
  alertMsg = "Jawaban benar: " + correct + " dari " + questionCount + " soal.\n\n";
  alertMsg += "Persentase jawaban benar: " + pc + "% dari seluruh soal! \n\n";
  if(pc == 100)
    alertMsg += response[0];
  else if(pc >= 90)
    alertMsg += response[1];
  else if(pc >= 70)
    alertMsg += response[2];
  else if(pc > 50)
    alertMsg += response[3];
  else if(pc >= 40)
    alertMsg += response[4];
  else if(pc >= 20)
    alertMsg += response[5];
  else if(pc >= 10)
    alertMsg += response[6];
  else
    alertMsg += response[7];
  if(pc < 100) {
    bootbox.alert(alertMsg);
  } else {
    bootbox.alert(alertMsg);
  }
}

function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].name == classId) {
      alltags[i].disabled = true;
    }
  }
}

function showStuff(id) {
  document.getElementById(id).style.display = 'block';
}

function hideStuff(id) {
  document.getElementById(id).style.display = 'none';
}

$(function ()  
{ $("#exp_nol").popover({animation:true});  
});
$(function ()  
{ $("#exp_satu").popover({animation:true});  
});
$(function ()  
{ $("#exp_dua").popover({animation:true});  
});
$(function ()  
{ $("#exp_tiga").popover({animation:true});  
});
$(function ()  
{ $("#exp_empat").popover({animation:true}); 
});
$(function ()  
{ $("#exp_lima").popover({animation:true});
});
$(function ()  
{ $("#exp_enam").popover({animation:true});
});
$(function ()  
{ $("#exp_tujuh").popover({animation:true});
});
$(function ()  
{ $("#exp_delapan").popover({animation:true});
});
$(function ()  
{ $("#exp_sembilan").popover({animation:true});
});