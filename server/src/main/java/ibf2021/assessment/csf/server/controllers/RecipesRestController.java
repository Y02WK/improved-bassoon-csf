package ibf2021.assessment.csf.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonArrayBuilder;

/* Write your request hander in this file */
@RestController
public class RecipesRestController {
    @Autowired
    private RecipeService recipeService;

    @GetMapping(path = "/api/recipes", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getAllRecipes() {
        List<Recipe> recipeList = recipeService.getAllRecipes();

        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
        recipeList.stream().forEach(recipe -> arrayBuilder.add(
                Json.createObjectBuilder()
                        .add("id", recipe.getId())
                        .add("name", recipe.getTitle())));

        JsonArray respArray = arrayBuilder.build();
        System.out.println(respArray.toString());

        return ResponseEntity.ok(respArray.toString());
    }
}
