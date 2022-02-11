package ibf2021.assessment.csf.server.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import ibf2021.assessment.csf.server.models.Recipe;
import ibf2021.assessment.csf.server.services.RecipeService;
import jakarta.json.Json;
import jakarta.json.JsonObject;

/* Write your request hander in this file */
@RestController
public class RecipeRestController {
    @Autowired
    private RecipeService recipeService;

    // REMOVE LATER
    @CrossOrigin
    @GetMapping(value = "/api/recipe/{recipeId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getRecipeById(@PathVariable String recipeId) {
        Optional<Recipe> recipeBox = recipeService.getRecipeById(recipeId);
        Recipe recipe;
        if (recipeBox.isPresent()) {
            recipe = recipeBox.get();
        } else {
            // If no recipe found for given id, return 404 response
            return ResponseEntity.notFound().build();
        }

        JsonObject respObj = Json.createObjectBuilder()
                .add("title", recipe.getTitle())
                .add("image", recipe.getImage())
                .add("instruction", recipe.getInstruction())
                .add("ingredients", Json.createArrayBuilder(recipe.getIngredients()))
                .build();

        return ResponseEntity.ok(respObj.toString());
    }
}