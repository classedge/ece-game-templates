var jsonData, template;
$.getJSON( "data.json").done(function(data) 
{
	jsonData = data.data;
	init();
	
}).fail(function( jqxhr, textStatus, error ) 
{
    var err = textStatus + ", " + error;
});


function init() { 
	setupDOM();
}

function setupDOM()
{
	var htmlStr = "";	
	htmlStr += "<div id='questions'>";	
	for(var i = 0; i < jsonData.questions.length; i++)
	{
		htmlStr += "<div class='question' id='question_"+i+"'>Question -->> "+i
			htmlStr += "<div class='questionText'>"+jsonData.questions[i].questionText+"</div>"
			htmlStr += "<div class='optionHead'><div class='optionText'></div></div>";
			for(var j = 0; j < jsonData.questions[i].options.length; j++)
			{
				
				htmlStr += "<div class='option' id='option_"+j+"'>";
				if(jsonData.questions[i].options[j].text === "_")
				{
					htmlStr += "<input type='text' class='inputText'>";						
				}
				else
				{
					htmlStr += "<div class='optionText' id='optionText_'"+j+">"+jsonData.questions[i].options[j].text+"</div>";	
				}
				htmlStr += "</div>";
			}
		htmlStr += "</div>";
	}	
	htmlStr += "</div>";
	$('#questionContainer').append(htmlStr);
	
	showQuestion(0)
	
}

function showQuestion(qID)
{
	$('.question').css('display', 'none');
	$('#question_'+qID).css('display', 'block');
}